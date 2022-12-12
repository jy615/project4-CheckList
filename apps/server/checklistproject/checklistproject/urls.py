"""checklistproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include,re_path
from django.conf.urls import include
from rest_framework import routers
from checklistapp import views
# create a new router
#router = routers.DefaultRouter()
# register our viewsets
#router.register(r'patients', patientApi) #register "/todos" routes
#router.register(r'users', SecondViewSet) #register "/todos" routes


urlpatterns = [
    # add all of our router urls
    #path('patient/', patientApi.as_view()),
    path('admin/', admin.site.urls),
    re_path(r'^api/patients/$', views.patients_list),
    re_path(r'^api/patients/([0-9])$', views.patients_detail),
    re_path(r'^api/users/$', views.users_list),
    re_path(r'^api/users/([0-9])$', views.users_detail),
    re_path(r'^api/forms/$', views.forms_list),
    re_path(r'^api/forms/([0-9])$', views.forms_detail),
]
