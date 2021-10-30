# Generated by Django 3.2.8 on 2021-10-28 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211028_1600'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupmodel',
            name='foods',
            field=models.ManyToManyField(related_name='foods', to='api.FoodModel'),
        ),
        migrations.AlterField(
            model_name='groupmodel',
            name='users',
            field=models.ManyToManyField(related_name='users', to='api.UserModel'),
        ),
    ]
