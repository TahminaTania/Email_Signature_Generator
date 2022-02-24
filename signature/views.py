from django.shortcuts import render
from django.http import HttpResponse
from .forms import registration
from .models import person


# def index(request):
#     return HttpResponse("Hello, world.")

# Create your views here.


def inputpage(request):
    form= registration()
    if request.method == 'POST':
        fm = registration(request.POST)
        if fm.is_valid():
            fm.save()    
        NewUser = fm.cleaned_data.get('username')

        
    else:
        fm = registration()
    people = person.objects.all()
    return render(request, 'signature/input.html', {
        'form': fm,
        'pep': people
    })
     

def outputpage(request):
    return render (request, 'signature/output.html')
