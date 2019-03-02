from django import forms
from . import models

class SearchSertificate(forms.ModelForm):
    class Meta:
        model = models.Sertificate 
        fields = ['identificator']