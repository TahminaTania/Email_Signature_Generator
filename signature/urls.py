from click import edit
from django.urls import path
from . import views

urlpatterns = [
    # path('index/', views.index, name='index'),
    path('',views.inputpage, name='input'),
    path('signature/',views.outputpage, name='output'),
    path('edit/<slug:pers_name>',views.Edit, name='edit')
] 