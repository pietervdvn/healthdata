from django.db import models
import datetime
from django.utils import timezone

class HospitalNetwork(models.Model):
    name = models.CharField(max_length = 500)
    id = models.IntegerField(primary_key = True)

class Hospital(models.Model):
    network = models.ForeignKey(HospitalNetwork, to_field="id", db_column="hospital_network_id", on_delete=models.CASCADE)
    name = models.CharField(max_length = 500)
    latitude = models.CharField(max_length = 500)
    longitude = models.CharField(max_length = 500)
    nbBeds = models.IntegerField()
    siteNbr = models.CharField(max_length=10, unique=True, null=True)
    address = models.CharField(max_length = 500, null=True)
    postalCode = models.IntegerField(null=True)
    town = models.CharField(max_length = 500, null=True)
    website = models.CharField(max_length = 500, null=True)
    telephone = models.CharField(max_length = 500, null=True)
    province = models.CharField(max_length = 500, null=True)
    type = models.CharField(max_length = 500, null=True)


    def __str__(self):
        template = '{0.name} {0.latitude} {0.longitude} {0.nbBeds}'
        return template.format(self)

class Population(models.Model):
    name = models.CharField(max_length = 600)
    year = models.IntegerField()
    amount = models.IntegerField()

class PopulationDetailed(models.Model):
    name = models.CharField(max_length = 600)
    year = models.IntegerField()
    amount = models.IntegerField()
    age = models.IntegerField(null=True)
    gender = models.CharField(max_length = 600, null = True)

class Bed(models.Model):
    network = models.ForeignKey(HospitalNetwork, to_field="id", db_column="network_id", on_delete=models.CASCADE, null=True)
    year = models.IntegerField()
    month = models.IntegerField()
    type = models.CharField(max_length= 20, null = True)
    amount = models.IntegerField()
    typeName = models.CharField(max_length = 500, null = True)

class BedDetailed(models.Model):
    hospital = models.CharField(max_length=600)
    typeofbed = models.CharField(max_length=600)
    typeName = models.CharField(max_length=600, null=True)
    amount = models.CharField(max_length=600)
    year = models.IntegerField(null=True)
    month = models.IntegerField(null=True)

