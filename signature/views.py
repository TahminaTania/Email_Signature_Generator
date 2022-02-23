from django.shortcuts import render
from django.http import HttpResponse
from .forms import registration
from .models import person


# def index(request):
#     return HttpResponse("Hello, world.")

# Create your views here.


def inputpage(request):
     if request.method == 'POST':
        fm = registration(request.POST)
        people = person.objects.all()

        if fm.is_valid():
            N = fm.cleaned_data['name']
            E = fm.cleaned_data['email']
            P = fm.cleaned_data['Job_Title']
            reg = person(name=N, email=E, Job_Title=P)
            reg.save()
     else:
        fm = registration()
     people = person.objects.all()
     return render(request, 'signature/input.html', {
        'form': fm,
        'pep': people
    })
     

def outputpage(request):
    return render (request, 'signature/output.html')
