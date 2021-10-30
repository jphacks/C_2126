from rest_framework import serializers

from .models import FoodModel, UserModel, GroupModel


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodModel
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroupModel
        fields = '__all__'
