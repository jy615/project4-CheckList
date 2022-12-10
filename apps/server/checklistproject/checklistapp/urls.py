from django.urls import re_path, include
from checklistapp import views
 
urlpatterns = [
    re_path('checklistapp', views.patientApi),  
 ]
 
 