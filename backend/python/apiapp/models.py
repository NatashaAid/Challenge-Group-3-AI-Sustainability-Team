from django.db import models

# Create models

class EnvironmentalImpactDashboard(models.Model):
    """Create tables."""
    ozone_depletion = models.IntegerField(blank=True, null=True)
    human_toxicity = models.IntegerField(blank=True, null=True)
    eutrophication_marine_environments = models.IntegerField(blank=True, null=True)
    ecotoxicity = models.IntegerField(blank=True, null=True)
    resouce_use = models.IntegerField(blank=True, null=True)
    particulate_matter = models.IntegerField(blank=True, null=True)
    eutrophication_freshswater = models.IntegerField(blank=True, null=True)
    photochemical_ozone_formation = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return str(self.ozone_depletion)
