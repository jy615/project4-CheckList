from django.db import models

# Create your models here.
class Patients(models.Model):
    
    PatientName = models.CharField(max_length=100)
    
class Users(models.Model):
    
    UserName = models.CharField(max_length=100)