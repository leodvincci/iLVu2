from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


# Create your views here.
def index(request):
    the_index = open("static/index.html")
    return HttpResponse(the_index)
