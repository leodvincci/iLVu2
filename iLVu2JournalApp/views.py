from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from django.contrib.auth.decorators import login_required
import json
import requests
from dotenv import load_dotenv
from .models import *
from .models import Calendar as TheCalendar

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
    data = serializers.serialize("json", [request.user], fields=["first_name", "id"])
    data_workable = json.loads(data)
    user = request.user
    if user.is_authenticated:
        print("USER Authenticated")
        print(data_workable)
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


@api_view(["GET", "POST", "DELETE", "PUT"])
def Prompt_Response(request):
    if request.method == "GET":
        query = request.GET.get('user_id')
        query_2 = request.GET.get('site_prompt_id')
        # print(query)
        # print(query_2)
        # print(request.user.id)
        # print(list(PromptResponse.objects.filter(Site_Prompt_id=query_2, App_User_id=request.user.id).values()))
        return JsonResponse(
            {"Data": list(PromptResponse.objects.filter(Site_Prompt_id=query_2, App_User_id=request.user.id).values())})
    elif request.method == "POST":
        prompt_response_text = request.data['prompt_response_text']
        site_prompt_id = request.data['Site_Prompt_id']

        prompt_response = PromptResponse(prompt_response_text=prompt_response_text,
                                         Site_Prompt_id=site_prompt_id, App_User_id=request.user.id)
        prompt_response.save()
        print(prompt_response)
        return JsonResponse({"prompt_response_id": prompt_response.pk})
    elif request.method == "DELETE":
        prompt_response = PromptResponse.objects.get(pk=request.data['id'])
        print(prompt_response)
        prompt_response.delete()
        return JsonResponse({"300": "Removed"})
    elif request.method == "PUT":
        prompt_response_text = request.data['prompt_response_text']

        prompt_response = PromptResponse.objects.filter(pk=request.data['id']).update(
            prompt_response_text=prompt_response_text)
        print(prompt_response)
        return JsonResponse({"200": "Success"})


@api_view(["GET", "POST", "DELETE", "PUT"])
def Calendar(request):
    Journal_Tracker_Id = None
    Mood_Tracker_id = None
    if request.method == "GET":
        return JsonResponse({"Data": list(TheCalendar.objects.all().values())})
    elif request.method == "POST":
        for d in request.data:
            if d == "Journal_Tracker_id":
                Journal_Tracker_Id = request.data[d]
            elif d == "Mood_Tracker_id":
                Mood_Tracker_id = request.data[d]

        date = request.data['date']

        App_user_id = request.user.id
        cal_item = TheCalendar(date=date, Journal_Tracker_id=Journal_Tracker_Id, Mood_Tracker_id=Mood_Tracker_id,
                               App_user_id=App_user_id)
        cal_item.save()
        return JsonResponse({"200": "Success"})
    return JsonResponse({"911": "Fail"})


@api_view(["GET", "POST", "DELETE"])
def Journal_Tracker(request):
    if request.method == "GET":
        return JsonResponse({"Data": list(JournalTracker.objects.all().values())})
    elif request.method == "POST":
        prompt_response_id = request.data['Prompt_Response_id']
        Journal_Tracker = JournalTracker(Prompt_Response_id=prompt_response_id)
        Journal_Tracker.save()
        print("JournalPK: ", Journal_Tracker.pk)
        return JsonResponse({"Journal_Tracker": Journal_Tracker.pk})
    return JsonResponse({"911": "Fail"})


@api_view(["GET", "DELETE", 'POST'])
def Mood_Tracker(request):
    if request.method == "GET":
        return JsonResponse({"Data": list(MoodTracker.objects.filter(App_User_id=request.user.id).values())})
    elif request.method == "POST":
        mood_description = request.data["mood_description"]
        mood_response = request.data["mood_response"]
        theDate = request.data['date']
        app_user_id = request.data['App_user_id']
        moodTracker = MoodTracker(mood_description=mood_description, mood_response=mood_response,
                                  App_User_id=app_user_id, date=theDate)
        moodTracker.save()
        print("ID: ", moodTracker.pk)

        return JsonResponse({"Mood_Tracker_id": moodTracker.pk})
    return JsonResponse({"911": "Fail"})


def Site_Prompt(request):
    query = request.GET.get('id')
    print(query)
    print(list(SitePrompt.objects.filter(Prompt_Category_id=4).values()))
    return JsonResponse({"Data": list(SitePrompt.objects.filter(Prompt_Category_id=query).values())})


@api_view(["GET", "POST"])
def User_Prompt(request):
    if request.method == "GET":
        return JsonResponse({"Data": list(UserPrompt.objects.all().values())})
    elif request.method == "POST":
        prompt_text = request.data["prompt_text"]
        Prompt_Category_id = request.data["Prompt_Category_id"]
        user_prompt = UserPrompt(prompt_text=prompt_text, Prompt_Category_id=Prompt_Category_id)
        user_prompt.save()
        return JsonResponse({"200": "Success"})
    return JsonResponse({"911": "Fail"})
