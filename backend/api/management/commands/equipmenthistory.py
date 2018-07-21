import os
import csv
import xlrd
import re
import os
import pandas as pd
import numpy as np
import glob
import bonobo

from bonobo.contrib.django import ETLCommand
from api.models import EquipmentDetailed
from django.conf import settings


def find_excels():
    dataDir = os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals')
    # Ziekenhuisbedden%2001_02_2011
    path = os.getcwd()
    files = os.listdir(dataDir)
    files
    for i in range(0,len(files)):
        match = re.match(r'Adressenlijst%20(\d{2})_(\d{4})%20van%20de%20AZ%20en%20PZ.*.xls', files[i])
        if match is not None and int(match.group(2)) > 2017:
            yield (match.group(0), match.group(1), match.group(2))

def bed_type_for_name(type):
    names = [
'Neuropsychiatric department for observation and treatment',
'Day nursing in an A department',
'Night nursing in an A department',
'Department for surgical diagnosis and treatment',
'Mixed inpatient department C + D',
'Department for medical diagnosis and treatment',
'Paediatric medicine department',
'Exclusive Medicine for Older People department',
'Department for intensive treatment of psychiatric patients “Adult SGA (severely disturbed and aggressive)”',
'Neuropsychiatric department for children',
'Day nursing in K department',
'Night nursing in K department',
'Infectious diseases department',
'Maternity',
'Neonatal intensive care department',
'Specialist department for cardio-pulmonary conditions',
'Specialist department for locomotor conditions',
'Specialist department for neurological conditions',
'Specialist department for palliative care',
'Specialist department for chronic diseases',
'Specialist Older Persons Mental Health department',
'Neuropsychiatric department for treatment',
'Day nursing in T department',
'Night nursing in T department',
'Inpatient placement with family',
'Placement in family context',
'Day and night nursing for older patients requiring neuropsychiatric treatment',
'Total Result',
'Total Result'
]
    types =  ['A','A1','A2','C','CD','D','E','G','I1','K','K1','K2','L','M','NIC','S1','S2','S3','S4','S5','S6','T','T1','T2','TFB','TFP','Tg', 'TOTAAL BEDDEN','Eindtotaal']
    map = dict(zip(types,names))
    return map[type]


def transform_excels_to_equipment_history(excel, month, year):     
    df = pd.read_excel(excel)
    df_new = df[df.columns[50:69]]
    df_new['ZIEKENHUIS '] = df[['ZIEKENHUIS ']]
    df_new_shaped = pd.melt(df_new, id_vars='ZIEKENHUIS ', value_vars=df.columns[50:69])
    df_new_shaped = df_new_shaped.iloc[3:]
    df_new_shaped['month']=np.repeat(month, df_new_shaped.shape[0])
    df_new_shaped['year']=np.repeat(year, df_new_shaped.shape[0])
    df_new_shaped.to_csv(os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', str(excel)+'_equipmentdetailed'))
    csvFile = open(os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', str(excel)+'_equipmentdetailed'))
    reader = csv.DictReader(csvFile)
    for row in reader:
        #yield row
        #for row in df_new_shaped.iterrows():
        p = EquipmentDetailed(hospital=row['ZIEKENHUIS '], typeofequipment=row['variable'], typeName=equipment_type_for_name(row['variable']), amount=row['value'], month=row['month'], year=row['year'])
        yield p


def load_equipmentdetailed_data(equipmentdetailed):
    equipmentdetailed.save()



class Command(ETLCommand):
    def get_graph(self, **options):
        graph = bonobo.Graph()
        graph.add_chain(
            find_excels,
            transform_excels_to_equipment_history,
            load_equipmentdetailed_data
        )
        return graph









