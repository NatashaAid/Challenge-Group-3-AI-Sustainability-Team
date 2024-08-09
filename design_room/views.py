from django.shortcuts import render
from .models import *
from .serializers import EnvironmentalImpactDashboardSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

def product_search(request):
    query = request.GET.get('q')
    products = Product.objects.filter(name__icontains=query) if query else Product.objects.all()
    return render(request, 'search.html', {'products': products})


@api_view(['GET'])
def EnvironmentalImpactDashboardViewSet(request):
    queryset = EnvironmentalImpactDashboard.objects.all()
    serializer = EnvironmentalImpactDashboardSerializer(queryset, many=True)
    return Response(serializer.data)
