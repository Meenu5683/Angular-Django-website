# Generated by Django 4.2.3 on 2023-07-31 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=20)),
                ('book_author', models.CharField(max_length=20)),
                ('book_price', models.IntegerField()),
                ('book_description', models.TextField()),
            ],
        ),
    ]
