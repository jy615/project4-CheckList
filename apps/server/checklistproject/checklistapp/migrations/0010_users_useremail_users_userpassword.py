# Generated by Django 4.1.4 on 2022-12-13 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checklistapp', '0009_rename_userfirstname_users_username_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='UserEmail',
            field=models.EmailField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='users',
            name='UserPassword',
            field=models.CharField(default='DEFAULT VALUE', max_length=50),
        ),
    ]
