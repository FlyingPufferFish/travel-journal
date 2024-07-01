from django.shortcuts import render, get_object_or_404
from .models import Poi

# Create your views here.
def homepage(request):
    pois = Poi.objects
    return render(request, 'pois/home.html', {'pois': pois})