# Generated by Django 2.0.7 on 2018-07-17 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Population',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('province', models.CharField(max_length=600)),
                ('year', models.IntegerField()),
                ('amount', models.IntegerField()),
            ],
        ),
    ]
