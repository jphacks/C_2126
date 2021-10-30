from django.db import models
from django.utils import timezone

FOOD_TYPE_CHOICES = (
    (0, '水'),
    (1, '食料品'),
    (2, 'おかず'),
    (3, 'その他')
)
FOOD_GENRE_CHOICES = (
    (0, '水'),
    (1, '麺'),
    (2, 'おかゆ'),
    (3, 'その他')
)


class FoodModel(models.Model):
    title = models.CharField(max_length=50)
    type = models.IntegerField(
        choices=FOOD_TYPE_CHOICES,
        help_text='0: 水, 1: 食料品, 2: おかず, 3: その他'
    )
    genre = models.IntegerField(
        choices=FOOD_GENRE_CHOICES,
        help_text='0: 水, 1: 麺, 2: おかゆ, 3: その他'
    )
    count = models.IntegerField(default=0)
    expiration = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title



class UserModel(models.Model):
    line_id = models.CharField(max_length=50)
    token = models.CharField(max_length=50)

    def __str__(self):
        return self.line_id



class GroupModel(models.Model):
    line_group_id = models.CharField(max_length=50, blank=False)
    title = models.CharField(max_length=50, blank=False)
    count_users = models.IntegerField()
    stock_days = models.IntegerField()
    foods = models.ManyToManyField(
        FoodModel,
        related_name='foods'
    )
    users = models.ManyToManyField(
        UserModel,
        related_name='users'
    )

    def __str__(self):
        return self.title