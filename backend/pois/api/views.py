from rest_framework.viewsets import ModelViewSet
from ..models import Poi
from .serializers import PoiSerializer

class PoiViewSet(ModelViewSet):
    queryset = Poi.objects.all()
    serializer_class = PoiSerializer
