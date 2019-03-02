from django.conf.urls import url
from . import views

app_name = 'sertificate'

urlpatterns = [
    url(r'^$', views.get_sertificate, name='search'),
]