from rest_framework.routers import DefaultRouter
from pois.api.urls import poi_router
from django.urls import path, include

router = DefaultRouter()
# one per app
# pois
router.registry.extend(poi_router.registry)

# albums


urlpatterns = [
    # main path
    path('', include(router.urls))
]