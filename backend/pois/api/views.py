from rest_framework.viewsets import ModelViewSet
from ..models import Poi
from .serializers import PoiSerializer
from django.http import HttpResponse

class PoiViewSet(ModelViewSet):
    queryset = Poi.objects.all()
    serializer_class = PoiSerializer

    # override built-in post method
    def post(self, request, *args, **kwargs):
        title = request.data['title']
        city = request.data['city']
        date = request.data['date']
        
        image = request.data['image']
        Poi.objects.create(title=title, city=city, date=date, image=image)
        return HttpResponse({'message': 'Poi created'}, status=200)
