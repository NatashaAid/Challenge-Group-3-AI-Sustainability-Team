from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import EnvironmentalImpactDashboardViewSet

router = DefaultRouter()

urlpatterns = [
    path('', views.EnvironmentalImpactDashboardViewSet, name="environmental-dashboard")

]