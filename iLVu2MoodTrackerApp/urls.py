from django.urls import path
from .views import MyMood

urlpatterns = [
    path("", MyMood, name="mymood")
    ]