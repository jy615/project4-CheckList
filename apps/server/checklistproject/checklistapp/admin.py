from django.contrib import admin
from .models import Patients, Users, Forms
# Register your models here.
admin.site.register(Patients)
admin.site.register(Users)
admin.site.register(Forms)