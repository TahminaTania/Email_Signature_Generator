from django.contrib import admin
from .models import person

# Register your models here.

class personadmin(admin.ModelAdmin):
     list_display = ('name', 'email','Job_Title','Department','Company','Phone')

admin.site.register(person,personadmin)