# Generated by Django 2.0.7 on 2018-07-23 08:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_merge_20180723_0852'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='populationdetailed',
            name='code',
        ),
    ]