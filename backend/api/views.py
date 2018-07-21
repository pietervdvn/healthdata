from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from api.models import Hospital, HospitalNetwork, Population, PopulationDetailed, Bed, BedDetailed
from api.serializers import HospitalDetailSerializer, PopulationSerializer, PopulationDetailedSerializer, HospitalNetworkSerializer, BedSerializer, BedDetailedSerializer

def isInt(value):
    try:
        int(value)
        return True
    except:
        return False

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

def detailedHospital_list(request):
    hospitals = Hospital.objects.all()
    serializer = HospitalDetailSerializer(hospitals, many=True)
    return JsonResponse(serializer.data, safe=False)

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



def bedDetailed_data(request):
    population = BedDetailed.objects.all()
    serializer = BedDetailedSerializer(population, many=True)
    return JsonResponse(serializer.data, safe=False)

def bedDetailed_detail(request, pk):
    try:
        population = BedDetailed.objects.get(pk=pk)
    except BedDetailed.DoesNotExist:
        raise Http404("Populationdeatiled not found")
    serializer = BedDetailedSerializer(population)
    return JsonResponse(serializer.data)







