from django.forms import ModelForm,ImageField
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from .models import person,profiles




class registration(forms.ModelForm):


    class Meta:
        model = person
        fields = ['name','email','Job_Title','Department','Company','Phone','Mobile','Address','Image','Address',
        'Facebook','Github','Twiter','Linkedin','Youtube','Website']
        
        # models.TextField: {'widget': Textarea(attrs={'rows':4, 'cols':40})},
        
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control','placeholder':'Enter Youe Email'}),
            'Job_Title': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Designation'}),
            'Department': forms.TextInput(attrs={'class': 'form-control','placeholder':'With which department you work'}),
            'Company': forms.TextInput(attrs={'class': 'form-control','placeholder':'Your Comapy name'}),
            'Phone': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Phone Number'}),
            'Mobile': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Mobile Number'}),
            'Address': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Address'}),
            'Image': forms.FileInput(attrs={'class':'form-control form-control-sm','type':'file'}),
            'Facebook': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Facebook.com/...' }),
            'Github': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Github.com/...'}),
            'Twiter': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Twiter.com/...' }),
            'Linkedin': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Linkedin.com/...' }),
            'Youtube': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Youtube.com/...' }),
            'Website': forms.URLInput(attrs={'class': 'form-control','placeholder':'Enter Your website Link'}),
            
            
            # 'password': forms.PasswordInput(render_value=True, attrs={'class': 'form-control'})
        }
class Uregistration(UserCreationForm):
    class Meta:
        model = profiles
        #fields= '__all__'
        fields = ['username',
                  'email', 'password1', 'password2']
        # widgets = {
        #     'name': forms.TextInput(attrs={'class': 'form-control'}),
        #     'email': forms.EmailInput(attrs={'class': 'form-control'}),
        #     'password1': forms.PasswordInput(attrs={'class': 'form-control'}),
        #     'password2': forms.PasswordInput(attrs={'class': 'form-control'})
        # }