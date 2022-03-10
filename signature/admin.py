from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import person,profiles

# Register your models here.

class users(admin.ModelAdmin):
     list_display = ('id','name', 'email','Job_Title','Department','Company','Phone','Address','Image','Address',
        'password','Facebook','Github','Twiter','Linkedin','Website')

        

admin.site.register(person,users)



class profilesAdmin(admin.ModelAdmin):
    list_display = ('email','username', 'last_login','date_joined','is_admin','is_staff')
    search_fields=('email','username')
    readonly_fields=('id','date_joined','last_login')

    filter_horizontal=()
    list_filter=()
    fieldsets=()
admin.site.register(profiles, profilesAdmin)