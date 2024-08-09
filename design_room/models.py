from django.db import models

# Create your models here.

class EnvironmentalScorecard(models.Model):
    name = models.CharField(max_length=255)
    carbon_footprint = models.DecimalField(max_digits=10, decimal_places=2)
    water_usage = models.DecimalField(max_digits=10, decimal_places=2)
    energy_efficiency = models.DecimalField(max_digits=10, decimal_places=2)

    # Add more environmental impact fields as needed

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    source = models.CharField(max_length=255)
    scorecard = models.ForeignKey(EnvironmentalScorecard, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class MaterialSuggestions(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    

class SupplierSuggestion(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class ProvideManufactruringOptions(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class EnvironmentalImpactDashboard(models.Model):
    climate_change = models.IntegerField(blank=True, null=True)
    water_usage = models.IntegerField(blank=True, null=True)
    land_usage = models.IntegerField(blank=True, null=True)
    accidification = models.IntegerField(blank=True, null=True)
    resource_usage = models.IntegerField(blank=True, null=True)
    human_toxity = models.IntegerField(blank=True, null=True)
    eutrophication = models.IntegerField(blank=True, null=True)
    ionising_radiation = models.IntegerField(blank=True, null=True)
    ozone_depletion = models.IntegerField(blank=True, null=True)
    human_toxity = models.IntegerField(blank=True, null=True)
    ionising_radiation = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return str(self.climate_change)