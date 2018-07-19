import bonobo
import os
import csv
import xlrd
import re

from bonobo.contrib.django import ETLCommand
from api.models import Bed, Hospital, HospitalNetwork
from django.conf import settings

def isInt(value):
    try:
        int(value)
        return True
    except:
        return False

def find_excels():
    dataDir = os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals')
    # Ziekenhuisbedden%2001_02_2011
    for root, dirs, files in os.walk(dataDir):
        for name in files:
            match = re.match(r'Ziekenhuisbedden%20\d{2}_(\d{2})_(\d{4}).*.xlsx', name)
            if match is not None and int(match.group(2)) > 2008:
                yield (name, match.group(1), match.group(2))

def transform_excels_to_beds_history(excel, month, year):
    filename = os.path.join(settings.BASE_DIR, 'api', 'source-data', 'hospitals', excel)
    wb = xlrd.open_workbook(filename, 'wb')
    sh = wb.sheet_by_index(0)
    headers = sh.row_values(3)
    print('parsing excel %s' % excel)
    for row_number in range(4,sh.nrows):
        row = dict(zip(headers,sh.row_values(row_number)))
        try:
            network = HospitalNetwork.objects.get(pk=int(row['Erkenningsnummer Ziekenhuis']))
        except:
            network = None
        if network is not None:
            for type in ['A','A1','A2','C','CD','D','E','G','I1','K','K1','K2','L','M','NIC','S1','S2','S3','S4','S5','S6','T','T1','T2','TFB','TFP','TG']:
                value = int(row[type]) if isInt(row[type]) else 0
                yield Bed(
                    network=network,
                    year=year,
                    month=month,
                    amount=value,
                    type=type
                )
        else:
            print('network not found for ERK: %s, excel: %s' % (row['Erkenningsnummer Ziekenhuis'], excel))

def save_beds(bed):
    bed.save()

class Command(ETLCommand):
    def get_graph(self, **options):
        graph = bonobo.Graph()
        graph.add_chain(
            find_excels,
            transform_excels_to_beds_history,
            save_beds
        )
        return graph
