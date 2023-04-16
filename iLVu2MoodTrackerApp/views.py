from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def MyMood(request):
    url = open("static/index.html")
    return HttpResponse(url)
