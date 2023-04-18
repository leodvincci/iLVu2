from django.db import models


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
