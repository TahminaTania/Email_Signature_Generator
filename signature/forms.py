from django.forms import ModelForm,ImageField
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from .models import person




class registration(forms.ModelForm):


    class Meta:
        model = person
        fields = ['name','email','Job_Title','Department','Company','Phone','Address','Image','Address',
        'password','Facebook','Github','Twiter','Linkedin','Website']
        
        # models.TextField: {'widget': Textarea(attrs={'rows':4, 'cols':40})},
        
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control','placeholder':'Enter Youe Email'}),
            'Job_Title': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Designation'}),
            'Department': forms.TextInput(attrs={'class': 'form-control','placeholder':'With which department you work'}),
            'Company': forms.TextInput(attrs={'class': 'form-control','placeholder':'Your Comapy name'}),
            'Phone': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Phone Number'}),
            'Address': forms.TextInput(attrs={'class': 'form-control','placeholder':'Enter Your Address'}),
            # 'Address':forms.Textarea(attrs={'rows':4, 'cols':15}),
            'Image': forms.FileInput(attrs={'class':'form-control'}),
            'Facebook': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Facebook.com/...' }),
            'Github': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Github.com/...'}),
            'Twiter': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Twiter.com/...' }),
            'Linkedin': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Linkedin.com/...' }),
            'Website': forms.CharField(attrs={'class': 'form-control','placeholder':'Enter Your website Link'}),
            
            
            # 'password': forms.PasswordInput(render_value=True, attrs={'class': 'form-control'})
        }
