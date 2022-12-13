
from .models import Patients, Users, Forms
from .createacc import NewUserForm
from django.contrib.auth.models import User, Group
from rest_framework import serializers



class PatientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Patients
        # the fields that should be included in the serialized output
        fields = ('PatientName', 'PatientIC', 'PatientDateOfAppt', 'PatientTimeOfAppt', 'PatientProcedure')
class UsersSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        # The model it will serialize
        model = Users
        # the fields that should be included in the serialized output
        fields = ('UserName', 'UserDOB', 'UserSpecialty', 'UserEmail', 'UserPassword') 
        
class FormsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        # The model it will serialize
        model = Forms
        # the fields that should be included in the serialized output
        fields = ('PatientName', 'TwoIdentify', 'ConsentForm', 'DrugAllergy', 'Hypertension', 'Dyslipidemia', 'Diabetic', 'FamilyHistory', 'Smoker', 'Menopause', 'Betablockers', 'Asthma', 'Glaucoma', 'ProcedureStatus', 'Remarks')
