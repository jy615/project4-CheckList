# Generated by Django 4.1.4 on 2022-12-12 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checklistapp', '0006_forms_nameofpatient'),
    ]

    operations = [
        migrations.AddField(
            model_name='forms',
            name='Asthma',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Betablockers',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='ConsentForm',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Diabetic',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='DrugAllergy',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Dyslipidemia',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='FamilyHistory',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Glaucoma',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Hypertension',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Menopause',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='Smoker',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
        migrations.AddField(
            model_name='forms',
            name='TwoIdentify',
            field=models.CharField(default='DEFAULT VALUE', max_length=100),
        ),
    ]
