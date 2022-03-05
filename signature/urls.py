from click import edit
from django.urls import path
from . import views

urlpatterns = [
    # path('index/', views.index, name='index'),
    path('',views.inputpage, name='input'),
    path('out/',views.outputpage, name='output'),
    path('edit/',views.Edit, name='edit')
] 