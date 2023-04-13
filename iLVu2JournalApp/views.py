from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth.models import User

# Create your views here.
def index(request):
    the_index = open("static/index.html")
    return HttpResponse(the_index)

@api_view(["POST"])
def register_user(request):
    first_name = request.data['first_name']
    last_name = request.data['last_name']
    email = request.data['email']
    password = request.data['password']
    user = User.objects.create_user(first_name = first_name, last_name = last_name, email=email ,username=email, password=password)
    user.save()
    return HttpResponse(f"{request.data['first_name']} Has Been Registerd!")
