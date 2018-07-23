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
from api.models import EquipmentDetailed, HospitalNetwork
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


def transform_excels_to_equipment_history(excel, month, year):     
    df = pd.read_excel(os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', excel))
    df_new = df[df.columns[49:104]]
    df_new['ERK'] = df[['ERK']]
    df_new = df_new.iloc[3:]
    df_new.columns = [
            'Medical imaging: CT', 'Magnetic resonance imaging (MRI)', 'Nuclear medicine with PET scanner', 'Radiotherapy', 'Dialysis centre', 'Transplantation centre', 'Human genetics centre', 'Severe burns centre', 'Care pathway for cardiac diseases A', 'Care pathway for cardiac diseases B3', 'Care pathway for cardiac diseases B1-B2', 'Care pathway for cardiac diseases C', 
            'Care pathway for cardiac diseases E', 'Care pathway for cardiac diseases P', 
            'Care pathway for cardiac diseases T',
            'Collaboration or association relating to care pathway for cardiac diseases',
            'Basic care pathway - stroke care',
            'Specialist care pathway - stroke care with invasive procedures',
            'Care pathway for reproductive medicine Type A',
            'Care pathway for reproductive medicine Type B',
            'Association - care pathway for reproductive medicine',
            'Care pathway for oncology: basic care',
            'Care pathway for oncology',
            'Coordinated specialist oncology care pathway for breast cancer',
            'Specialist oncology care pathway for breast cancer: "satellite breast clinic"',
            'Specialist oncology care pathway for breast cancer',
            'Basic care pathway for children (new Royal Decree of 02/04/2014',
            'Specialist care pathway for children (new Royal Decree of 02/04/2014',
            'Tertiary care pathway for children (new Royal Decree of 02/04/2014',
            'Care pathway for children (old Royal Decree of 13/07/2006',
            'Medicine for Older People department',
            'Outpatients for older people',
            'Day hospital for older patients',
            'Internal liaison',
            'External liaison',
            'Hospital pharmacy',
            'Association for hospital pharmacy',
            'Intensive care',
            'Local donor coordination',
            'Hospital blood bank',
            'Local neonatal care (N*)',
            'Regional perinatal care (P*)',
            'Paediatric liaison',
            'Emergency department - initial assessment', 
            'Emergency department - specialist care',
            'Emergency ambulance',
            'Association for emergency ambulance',
            'Palliative care',
            'Surgical day hospital',
            'Non-surgical day hospital',
            'Rare diseases',
            'Ombudsman service',
            'Expertise centre for coma patients',
            'Cystic fibrosis centre',
            'Clinical pathology department',
            'ERK'
            ]    
    df_new_shaped = pd.melt(df_new, id_vars='ERK', value_vars=df_new.columns[0:54])
    df_new_shaped['month']=np.repeat(month, df_new_shaped.shape[0])
    df_new_shaped['year']=np.repeat(year, df_new_shaped.shape[0])
    df_new_shaped = df_new_shaped.dropna()
    df_new_shaped.to_csv(os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', str(excel)+'_equipmentdetailed'))
    csvFile = open(os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', str(excel)+'_equipmentdetailed'))
    reader = csv.DictReader(csvFile)
    for row in reader:
        try:
            network = HospitalNetwork.objects.get(pk=int(row['ERK']))
        except:
            network = None
        #yield row
        #for row in df_new_shaped.iterrows():
        if network is not None:
            p = EquipmentDetailed(network=network, typeofequipment=row['variable'], available=row['value'], month=row['month'], year=row['year'])
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









