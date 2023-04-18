from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from django.contrib.auth.decorators import login_required
import json
import requests
from dotenv import load_dotenv
from .models import *

load_dotenv()
import os

from django.shortcuts import redirect


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
    user = User.objects.create_user(first_name=first_name, last_name=last_name, email=email, username=email,
                                    password=password)
    user.save()
    return HttpResponse(f"{request.data['first_name']} Has Been Registerd!")


@api_view(["POST"])
def user_login(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
    if user is not None:
        print("SUCESS")
        login(request, user)
        return HttpResponse(f"{request.data['email']} Has Logged In")

    else:
        print("Failed")
        return HttpResponse(f"{request.data['email']} Has NOT Been Registerd!")


@api_view(["GET"])
def user_logout(request):
    logout(request)
    print(f"User Has Been Logged Out!")
    return redirect('index')


@api_view(["GET"])
def curr_user(request):
    data = serializers.serialize("json", [request.user], fields=["first_name"])
    data_workable = json.loads(data)
    user = request.user
    if user.is_authenticated:
        print("USER Authenticated")
        return JsonResponse({"user_data": data_workable[0]})
    else:
        print("USER NOT SIGNED IN!")
        return JsonResponse({"user": None})


@api_view(["GET"])
def Emojis(request):
    url = f"https://emoji-api.com/emojis?search=face&access_key={os.getenv('EMO_KEY')}"
    api_call = requests.get(url, headers={})
    print(api_call.json())
    return JsonResponse({"data": api_call.json()})


@api_view(["GET"])
def Quotes(request):
    url = f"https://api.api-ninjas.com/v1/quotes?category=happiness"
    api_call = requests.get(url, headers={'x-Api-key': os.getenv("QUOTE_KEY")})
    print(api_call.json())
    return JsonResponse({"data": api_call.json()})


@api_view(["GET"])
def Categories(request):
    return JsonResponse({"Data": list(PromptCategory.objects.all().values())})

@api_view(["GET"])
def Prompt_Response(request):
    return JsonResponse({"Data": list(PromptResponse.objects.all().values())})
