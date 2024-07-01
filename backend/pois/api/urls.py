from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PoiViewSet

poi_router = DefaultRouter()
poi_router.register(r'pois', PoiViewSet)