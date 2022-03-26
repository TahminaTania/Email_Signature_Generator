from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import person

# Register your models here.

class users(admin.ModelAdmin):
     list_display = ('id','name', 'email','Job_Title','Department','Company','Phone','Mobile','Address','Image','Address',
        'password','Facebook','Github','Twiter','Linkedin','Website')

        

admin.site.register(person,users)



