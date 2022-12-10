
from .models import Patients, Users
from django.contrib.auth.models import User, Group
from rest_framework import serializers



class PatientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Patients
        # the fields that should be included in the serialized output
        fields = ['PatientName']
class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Users
        # the fields that should be included in the serialized output
        fields = ['UserName']