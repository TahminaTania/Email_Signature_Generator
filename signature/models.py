from django.db import models


# Create your models here.

class person(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=50)
    Job_Title= models.CharField(max_length=200)
    Department= models.CharField(max_length=200) 
    Company= models.CharField(max_length=200)
    Phone= models.CharField(max_length=200)
    # Phone= models.PhoneNumberField(max_length=20)
    Address= models.CharField(max_length=200)
    password = models.CharField(max_length=200)