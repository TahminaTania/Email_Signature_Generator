from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from .models import person


class registration(forms.ModelForm):
    class Meta:
        model = person
        fields = ['name', 'email', 'Job_Title']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            # 'password': forms.PasswordInput(render_value=True, attrs={'class': 'form-control'})
        }
