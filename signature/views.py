from pickle import NONE
from unicodedata import name
from django.shortcuts import redirect, render,redirect,HttpResponseRedirect
from django.http import HttpResponse
from .forms import registration,Uregistration
from .models import person
from django.contrib import messages
from django.views.generic import UpdateView
from django.views import View

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Create your views here.



# Create your views here.

def base(request):
    return render(request,'signature/base.html')




def input(request):
    return render(request,'signature/input.html')
