from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, permissions
from django.shortcuts import  render, redirect
from .createacc import NewUserForm
from django.contrib.auth import login
from django.contrib import messages
from .models import Patients, Users
from .serializers import *

@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def patients_list(request):
    if request.method == 'GET':
        data = Patients.objects.all()

        serializer = PatientsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PatientsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes((permissions.AllowAny,))
def patients_detail(request, pk):
    try:
        patient = Patients.objects.get(pk=pk)
    except Patients.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PatientsSerializer(patient, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        patient = Patients.objects.get(pk=pk)
        serializer = PatientsSerializer(patient, context={'request': request}, many=False)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
########### users #########
@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def users_list(request):
    if request.method == 'GET':
        data = Users.objects.all()

        serializer = UsersSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes((permissions.AllowAny,))
def users_detail(request, pk):
    try:
        user = Users.objects.get(pk=pk)
    except Users.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = UsersSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        user = Users.objects.get(pk=pk)
        serializer = UsersSerializer(user, context={'request': request}, many=False)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
####### forms ######
@api_view(['GET', 'POST'])
@permission_classes((permissions.AllowAny,))
def forms_list(request):
    if request.method == 'GET':
        data = Forms.objects.all()

        serializer = FormsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FormsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes((permissions.AllowAny,))
def forms_detail(request, pk):
    try:
        form = Forms.objects.get(pk=pk)
    except Forms.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = FormsSerializer(form, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        form = Forms.objects.get(pk=pk)
        serializer = FormsSerializer(form, context={'request': request}, many=False)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        form.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
######## new user form ########


