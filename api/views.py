from django.shortcuts import render
from rest_framework import viewsets
from django.db.models import Q
import datetime
from rest_framework.decorators import action

from django.http import HttpResponse
import json

from api.serializer import FoodSerializer, GroupSerializer, UserSerializer

from .models import FoodModel, GroupModel, UserModel

# Create your views here.


class FoodViewSet(viewsets.ModelViewSet):
    queryset = FoodModel.objects.all()
    serializer_class = FoodSerializer

    @action(methods=['get'], detail=True, url_path='get-expired', url_name='get_expired')
    def get_expired(self, request, pk):
        data = []

        for record in self.queryset:

            JST = datetime.timezone(datetime.timedelta(hours=9), "JST")

            date_str, time_str = str(record.expiration).split()
            today_str, today_time_str = str(datetime.datetime.today()).split()

            dt = datetime.datetime.strptime(date_str, '%Y-%m-%d') - datetime.datetime.strptime(today_str, '%Y-%m-%d')

            params = {
                'title': str(record.title),
                'expired': int(dt.days),
            }
            data.append(params)

        json_str = json.dumps(data, ensure_ascii=False, indent=2)
        return HttpResponse(json_str)


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer
