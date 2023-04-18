from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class PromptCategory(models.Model):
    category_name = models.CharField(max_length=30)
    category_description = models.TextField(max_length=200)
    category_img = models.TextField(max_length=100, null=True)


class SitePrompt(models.Model):
    prompt_text = models.CharField(max_length=200)
    Prompt_Category = models.ForeignKey(PromptCategory, on_delete=models.CASCADE)


class UserPrompt(models.Model):
    prompt_text = models.CharField(max_length=200)
    Prompt_Category = models.ForeignKey(PromptCategory, on_delete=models.CASCADE)


class PromptResponse(models.Model):
    prompt_type = models.CharField(max_length=30)
    prompt_response_text = models.TextField(max_length=200)


class JournalTracker(models.Model):
    is_complete = models.BooleanField(default=False)
    Prompt_Response = models.ForeignKey(PromptResponse, on_delete=models.RESTRICT)


class MoodTracker(models.Model):
    is_complete = models.BooleanField(default=False)
    mood_description = models.TextField(max_length=200)
    mood_response = models.TextField(max_length=50)


class Calendar(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    Journal_Tracker = models.ForeignKey(JournalTracker, on_delete=models.RESTRICT)
    Mood_Tracker = models.ForeignKey(MoodTracker, on_delete=models.RESTRICT)
    App_user = models.ForeignKey(User, on_delete=models.CASCADE)
