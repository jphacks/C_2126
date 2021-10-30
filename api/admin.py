from django.contrib import admin

from api.models import FoodModel, GroupModel, UserModel

# Register your models here.
admin.site.register(FoodModel)
admin.site.register(UserModel)
admin.site.register(GroupModel)