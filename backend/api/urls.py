from django.conf.urls import include, url

from api import views

urlpatterns = [
	url('populationdetailed/(?P<pk>[0-9]+)/$', views.populationDetailed_detail),
    url('populationdetailed', views.populationDetailed_data),
    url('population/(?P<pk>[0-9]+)/$', views.population_detail),
    url('population', views.population_data),
    url('hospitals/', views.detailedHospital_list),
    url('hospital-networks/(?P<pk>.*)/beds$', views.beds_per_network),
    url('hospital-networks/', views.hospitalNetwork_list),
]
