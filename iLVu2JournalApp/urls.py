from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("user/login", views.index, name="index"),
    path("user/register", views.index, name="register"),
    path("user/register_user",views.register_user, name="register_user")

]
