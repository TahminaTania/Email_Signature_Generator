from unicodedata import name
from django.shortcuts import redirect, render,redirect,HttpResponseRedirect
from django.http import HttpResponse
from .forms import registration
from .models import person
from django.contrib import messages



# Create your views here.
def inputpage(request):
    form= registration()
    if request.method == 'POST':
        fm = registration(request.POST,request.FILES) 
        if fm.is_valid():
            cd=fm.cleaned_data
            shout = person(name = cd['name'], email= cd['email'],Job_Title = cd['Job_Title'],Department = cd['Department'],Company = cd['Company'],Address = cd['Address'],Phone = cd['Phone'],
            Image = cd['Image'],
            Facebook = cd['Facebook'],
            Linkedin = cd['Linkedin'],
            Twiter = cd['Twiter'],
            Github = cd['Github'])
            shout.save()
            fm = registration()
            return redirect('output')  
                   
    else:
        fm = registration()
        
    return render(request, 'signature/input.html', {
        'form': fm

    })
     


## we need to read a single record , i mean last input 
#### ------ incomplete work( it showing all data from admin) --https://www.webforefront.com/django/singlemodelrecords.html

def outputpage(request):
    form= registration()
    if request.method == 'POST':
        fm = registration(request.POST,request.FILES)
        if fm.is_valid():
            cd=fm.cleaned_data
            shout = person(name = cd['name'], email= cd['email'],Job_Title = cd['Job_Title'],Department = cd['Department'],Company = cd['Company'],Address = cd['Address'],Phone = cd['Phone'],
            Image = cd['Image'],
            Facebook = cd['Facebook'],
            Linkedin = cd['Linkedin'],
            Twiter = cd['Twiter'],
            Github = cd['Github'])
            shout.save()
            fm = registration()
            return redirect('output') 
        else:
          fm = registration() 

    pers= person.objects.last()
    fm = registration()   
    return render(request, 'signature/output.html', {
        'pers':pers,
        'form':fm
    })
    

### i got an error here, it's duplicating person data in database not updating them, so i have to it with pk=id, mean in model and in admin, and thn have to call that id in (request, Id) and objects.get(pk=id)..... curently as it's not hampering my project + it's unnoticable, i am keeping this in this
def Edit(request,pers_name):
    if request.method == 'POST':
        new = person.objects.last()
        update = registration(request.POST, instance=new)
        if update.is_valid():
            update.save()
    else:
        new = person.objects.last()
        update = registration(instance=new)
    return render(request,'signature/edit.html',{
        'form': update,
        
        
        
    })
 

           
           
    # else:
    #     fm = registration()
    # data= person.objects.all()           
    # return render (request, 'signature/output.html',{
    #     'form': fm,
    #     'data': data
    #     })



# name=request.POST.get('name')
#             email=request.POST.get('email')
#             Job_Title=request.POST.get('Job_Title')
#             Department=request.POST.get('Department')
#             Company=request.POST.get('Company')
#             Phone=request.POST.get('Phone')
#             Address=request.POST.get('name')
#             password=request.POST.get('name')
#  N = fm.cleaned_data['name']
#             E = fm.cleaned_data['email']
#             J = fm.cleaned_data['Job_Title']
#             D = fm.cleaned_data['Department']
#             C = fm.cleaned_data['Company']
#             P = fm.cleaned_data['Phone']
#             A = fm.cleaned_data['Address']
#             # p = fm.cleaned_data['password']
#             reg = person(name=N, email=E,Job_Title =J,Department=D,Company=C,
#             Phone=P,Address=A)
#             reg.save() 