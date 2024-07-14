from django.db import models

# Create your models here.
class Poi(models.Model):

    # Title: a text/char field with specified size
    title = models.CharField(blank=True, null=True, max_length=200)
    city = models.CharField(blank=True, null=True, max_length=200)
    # date_visited = models.DateField(blank=True, null=True)

    # Images: save as image to specified folder location
    # here, save to images folder
    # image = models.ImageField(blank=True, null=True, upload_to='images/')

    def __str__(self) -> str:
        return f"Title: {self.title}"