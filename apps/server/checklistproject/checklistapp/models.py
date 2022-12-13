from django.db import models

# Create your models here.
class Patients(models.Model):
    
    PatientName = models.CharField(max_length=100)
    PatientIC = models.CharField(max_length=100, default='DEFAULT VALUE')
    PatientDateOfAppt = models.CharField(max_length=100, default='DEFAULT VALUE')
    PatientTimeOfAppt = models.CharField(max_length=100, default='DEFAULT VALUE')
    PatientProcedure = models.CharField(max_length=100, default='DEFAULT VALUE')
    
    def __str__(self):
        return self.PatientName
class Users(models.Model):
    
    UserName = models.CharField(max_length=100)
    UserDOB = models.CharField(max_length=100, default='DEFAULT VALUE')
    UserSpecialty = models.CharField(max_length=100, default='DEFAULT VALUE')
    UserEmail = models.EmailField(max_length=100, default='DEFAULT VALUE')
    UserPassword = models.CharField(max_length=50, default='DEFAULT VALUE')
    

    def __str__(self):
        return self.UserName
    
class Forms(models.Model):
    PatientName = models.ForeignKey(Patients, null=True, blank=True, on_delete=models.CASCADE)
    TwoIdentify = models.CharField(max_length=100, default='DEFAULT VALUE')
    ConsentForm = models.CharField(max_length=100, default='DEFAULT VALUE')
    DrugAllergy = models.CharField(max_length=100, default='DEFAULT VALUE')
    Hypertension = models.CharField(max_length=100, default='DEFAULT VALUE')
    Dyslipidemia = models.CharField(max_length=100, default='DEFAULT VALUE')
    Diabetic = models.CharField(max_length=100, default='DEFAULT VALUE')
    FamilyHistory = models.CharField(max_length=100, default='DEFAULT VALUE')
    Smoker = models.CharField(max_length=100, default='DEFAULT VALUE')
    Menopause = models.CharField(max_length=100, default='DEFAULT VALUE')
    Betablockers = models.CharField(max_length=100, default='DEFAULT VALUE')
    Asthma = models.CharField(max_length=100, default='DEFAULT VALUE')
    Glaucoma = models.CharField(max_length=100, default='DEFAULT VALUE')
    ProcedureStatus = models.CharField(max_length=100, default='Procedure Status')
    Remarks = models.CharField(max_length=100, default='DEFAULT VALUE')
    
    def __str__(self):
        return self.PatientName