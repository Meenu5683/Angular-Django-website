# Generated by Django 4.2.3 on 2023-08-02 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libraryapp', '0002_rename_book_author_book_author_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.CharField(max_length=200),
        ),
    ]
