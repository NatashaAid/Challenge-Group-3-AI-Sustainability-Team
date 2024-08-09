from rest_framework import serializers
from .models import EnvironmentalImpactDashboard


class EnvironmentalImpactDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnvironmentalImpactDashboard
        fields = '__all__'

