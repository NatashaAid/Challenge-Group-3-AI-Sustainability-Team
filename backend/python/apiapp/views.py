from rest_framework import viewsets
from .models import EnvironmentalImpactDashboard
from .serializers import EnvironmentalImpactDashboardSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create views.

@api_view(['GET'])
def EnvironmentalImpactDashboardViewset(request):
    queryset = EnvironmentalImpactDashboard.objects.all()
    serializer = EnvironmentalImpactDashboardSerializer(queryset, many=True)
    return Response(serializer.data)