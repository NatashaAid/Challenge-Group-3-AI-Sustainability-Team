from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.EnvironmentalImpactDashboardViewset, name="environmental-dashboard")

]
