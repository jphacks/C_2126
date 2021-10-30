from rest_framework import routers
from .views import FoodViewSet, GroupViewSet, UserViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('foods', FoodViewSet)
router.register('users', UserViewSet)
router.register('groups', GroupViewSet)

urlpatterns = [
    path('', include(router.urls)),
]