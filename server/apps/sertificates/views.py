from .models import Sertificate
from django.core import serializers
import json
from django.http import HttpResponse
from django.shortcuts import render
from . import forms

def get_sertificate(request):
  sertificates = Sertificate.objects.all()
  if request.GET.get('id'):
    cert = request.GET['id']
    try:
      Sertificate.objects.get(identificator=cert)
      sertificate = serializers.serialize('json', [Sertificate.objects.get(identificator=cert)])
      struct = json.loads(sertificate)
      sertificate = json.dumps(struct[0])
      return HttpResponse(sertificate)
    except Exception:
      return HttpResponse({'Not found.'}, status=400)
  return render(request, 'index.jinja', {'sertificates': sertificates})