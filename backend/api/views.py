from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from api.models import Bed, Hospital, HospitalNetwork, Population, PopulationDetailed, Depression
from api.serializers import HospitalSerializer, HospitalNetworkSerializer, PopulationSerializer, PopulationDetailedSerializer, DepressionSerializer, HospitalNetworkSerializer, BedSerializer


def isInt(value):
    try:
        int(value)
        return True
    except:
        return False
def hospital_list(request):
    hospitals = Hospital.objects.all()
    serializer = HospitalSerializer(hospitals, many=True)
    return JsonResponse(serializer.data, safe=False)

def hospital_detail(request, pk):
    try:
        hospital = Hospital.objects.get(pk=pk)
    except Hospital.DoesNotExist:
        raise Http404("Hospital not found")
    serializer = HospitalSerializer(hospital)
    return JsonResponse(serializer.data)

def population_data(request):
    population = Population.objects.all()
    serializer = PopulationSerializer(population, many=True)
    return JsonResponse(serializer.data, safe=False)

def population_detail(request, pk):
    try:
        population = Population.objects.get(pk=pk)
    except Population.DoesNotExist:
        raise Http404("Population not found")
    serializer = PopulationSerializer(population)
    return JsonResponse(serializer.data)

def populationDetailed_data(request):
    population = PopulationDetailed.objects.all()
    serializer = PopulationDetailedSerializer(population, many=True)
    return JsonResponse(serializer.data, safe=False)

def populationDetailed_detail(request, pk):
    try:
        population = PopulationDetailed.objects.get(pk=pk)
    except PopulationDetailed.DoesNotExist:
        raise Http404("Populationdeatiled not found")
    serializer = PopulationDetailedSerializer(population)
    return JsonResponse(serializer.data)

def depression_data(request):
    population = Depression.objects.all()
    serializer = DepressionSerializer(population, many=True)
    return JsonResponse(serializer.data, safe=False)

def depression_detail(request, pk):
    try:
        population = Depression.objects.get(pk=pk)
    except Depression.DoesNotExist:
        raise Http404("Depression not found")
    serializer = DepressionSerializer(population)
    return JsonResponse(serializer.data)

def hospitalNetwork_list(request):
    networks = HospitalNetwork.objects.all()
    serializer = HospitalNetworkSerializer(networks, many=True)
    return JsonResponse(serializer.data, safe=False)

def beds_per_network(request, pk):
    network = HospitalNetwork.objects.get(pk=pk)
    beds = Bed.objects.filter(network=network)
    if request.GET.get('year') is not None:
        beds = beds.filter(year=int(request.GET.get('year'))) # todo probably unsafe
    if request.GET.get('type') is not None:
        beds = beds.filter(type=request.GET.get('type')) # todo probably unsafe
    serializer = BedSerializer(beds, many=True)
    return JsonResponse(serializer.data, safe=False)
