from django.forms import ModelForm
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
            'Facebook': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Facebook.com/...' }),
            'Github': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Github.com/...'}),
            'Twiter': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Twiter.com/...' }),
            'Linkedin': forms.URLInput(attrs={'class': 'form-control','placeholder':'https://www.Linkedin.com/...' }),
            
            # 'password': forms.PasswordInput(render_value=True, attrs={'class': 'form-control'})
        }
