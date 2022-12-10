from django.shortcuts import render
from django.http import JsonResponse ## For Sending Json Responses
from django.views import View ## Allows our class to act as a view
from .models import Patients, Users
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework import permissions
from .serializers import PatientsSerializer, UsersSerializer
#from django.views.decorators.csrf import csrf_exempt


# Create your views here.
class patientApi(View):
    #since the methods name is "get" it will run on "get" requests
    def get(self, request):
        return JsonResponse({"hello":"world", "method": request.method})

    #since the methods name is "post" it will run on "post" requests
    def post(self, request):
        return JsonResponse({"hello":"world", "method": request.method})

    #since the methods name is "put" it will run on "put" requests
    def put(self, request):
        return JsonResponse({"hello":"world", "method": request.method})

    #since the methods name is "delete" it will run on "delete" requests
    def delete(self, request):
        return JsonResponse({"hello":"world", "method": request.method})