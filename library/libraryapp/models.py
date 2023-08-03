from django.db import models

# Create your models here.

class book(models.Model):
    title = models.CharField(max_length=20)
    author = models.CharField(max_length=20)
    price = models.IntegerField()
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title


