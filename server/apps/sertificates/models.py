from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
class Sertificate(models.Model):
    title = models.CharField('Title', max_length=100)
    hours = models.IntegerField('Hours', null=True)
    identificator = models.PositiveIntegerField('Identificator', validators=[RegexValidator(r'^\d{6}$','Number must be 6 digits','Invalid number')])
    date = models.DateTimeField(auto_now_add=True)
    thumb = models.ImageField('Image', default='', blank=True, null=True)
    author = models.CharField('Author', max_length=100)
    rating = models.IntegerField(default='0')
    def __str__(self):
        return self.title

    def snippet(self):
        if len(self.body) > 50:
            return self.body[:50] + '...'
        else:
            return self.body