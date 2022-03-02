from django.forms import ModelForm,ImageField
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from .models import person




class registration(forms.ModelForm):


    class Meta:
        model = person
        fields = ['name','email','Job_Title','Department','Company','Phone','Address','Image','Address',
        'password','Facebook','Github','Twiter','Linkedin']
        
        # models.TextField: {'widget': Textarea(attrs={'rows':4, 'cols':40})},
        
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'Job_Title': forms.TextInput(attrs={'class': 'form-control'}),
            'Department': forms.TextInput(attrs={'class': 'form-control'}),
            'Company': forms.TextInput(attrs={'class': 'form-control'}),
            'Phone': forms.TextInput(attrs={'class': 'form-control'}),
            'Address': forms.TextInput(attrs={'class': 'form-control'}),
            # 'Image':forms.FileInput(attrs={'capture': 'camera'}),
            'Image': forms.FileInput(attrs={'class':'form-control'}),
            'Facebook': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Facebook.com/...' }),
            'Github': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Github.com/...'}),
            'Twiter': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Twiter.com/...' }),
            'Linkedin': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Linkedin.com/...' }),
            # 'Phone': forms.CharField(attrs={'class': 'form-control','placeholder':'https://www.Linkedin.com/...'}),
            
            
            # 'password': forms.PasswordInput(render_value=True, attrs={'class': 'form-control'})
        }
