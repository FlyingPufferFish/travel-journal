from rest_framework.serializers import ModelSerializer
from ..models import Poi

class PoiSerializer(ModelSerializer):
    class Meta:
        model = Poi
        fields = ('id', 'title', 'city', 'date_visited', 'image')