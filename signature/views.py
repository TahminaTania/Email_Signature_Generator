from pickle import NONE
from unicodedata import name
from django.shortcuts import redirect, render,redirect,HttpResponseRedirect
from django.http import HttpResponse
from .forms import registration
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
    form= registration()
    if request.method == 'POST':
        fm = registration(request.POST,request.FILES) 
        if fm.is_valid():
            cd=fm.cleaned_data
            shout = person(name = cd['name'], email= cd['email'],Job_Title = cd['Job_Title'],Department = cd['Department'],Company = cd['Company'],Address = cd['Address'],Phone = cd['Phone'],Mobile = cd['Mobile'],Website= cd['Website'],
            Image = cd['Image'],
            Facebook = cd['Facebook'],
            Linkedin = cd['Linkedin'],
            Twiter = cd['Twiter'],
            Github = cd['Github'])
            shout.save()
            fm = registration()
            return redirect('input')  
                   
    else:
        fm = registration()
        
    return render(request, 'signature/output.html', {
        'form': fm

    })