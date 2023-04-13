from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view

# Create your views here.
def index(request):
    the_index = open("static/index.html")
    return HttpResponse(the_index)

@api_view(["POST"])
def register_user(request):
    return HttpResponse(f"{request.data} Has Been Registerd!")
