from click import edit
from django.urls import path
from . import views

urlpatterns = [
    # path('index/', views.index, name='index'),
    path('edit/<str:pers_name>/',views.Edit, name='edit'),
    path('signature/reg/', views.RegForm, name="reg"), 
    path('signature/LogIn/', views.logForm, name="log"),
    path('home/',views.inputpage, name='input'),
    path('',views.outputpage.as_view(), name='output'),
   

] 