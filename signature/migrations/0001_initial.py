# Generated by Django 4.0.1 on 2022-03-05 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
                ('email', models.EmailField(blank=True, max_length=50, null=True)),
                ('Job_Title', models.CharField(blank=True, max_length=20, null=True)),
                ('Department', models.CharField(blank=True, max_length=20, null=True)),
                ('Company', models.CharField(blank=True, max_length=20, null=True)),
                ('Phone', models.CharField(blank=True, max_length=20, null=True)),
                ('Image', models.ImageField(blank=True, null=True, upload_to='upload/')),
                ('Mobile', models.CharField(blank=True, max_length=20, null=True)),
                ('Website', models.CharField(blank=True, max_length=20, null=True)),
                ('Address', models.TextField(blank=True, max_length=200, null=True)),
                ('password', models.CharField(blank=True, max_length=10, null=True)),
                ('Facebook', models.URLField(blank=True, null=True)),
                ('Github', models.URLField(blank=True, null=True)),
                ('Twiter', models.URLField(blank=True, null=True)),
                ('Linkedin', models.URLField(blank=True, null=True)),
            ],
        ),
    ]
