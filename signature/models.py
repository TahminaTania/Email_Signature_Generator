from django.db import models


# Create your models here.

class person(models.Model):
    name = models.CharField(max_length=20,null=True, blank=True)
    email = models.EmailField(max_length=50,null=True, blank=True)
    Job_Title= models.CharField(max_length=20,null=True, blank=True)
    Department= models.CharField(max_length=20,null=True, blank=True) 
    Company= models.CharField(max_length=20,null=True, blank=True)
    Phone= models.CharField(max_length=20,null=True, blank=True)
    Image = models.ImageField(null=True, blank=True)
    Others=models.TextField(max_length=100,null=True, blank=True)
    Address= models.CharField(max_length=200, null=True, blank=True)
    password = models.CharField(max_length=10, null=True, blank=True)
    Facebook = models.URLField(max_length=200,null=True, blank=True)
    Github = models.URLField(max_length=200,null=True, blank=True)
    Twiter = models.URLField(max_length=200,null=True, blank=True)
    Linkedin = models.URLField(max_length=200,null=True, blank=True)