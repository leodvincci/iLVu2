from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("user/login", views.index, name="index"),
    path("quote", views.index, name="quote"),
    path("user/register", views.index, name="register"),
    path("user/register_user", views.register_user, name="register_user"),
    path("user/user_login", views.user_login, name="user_login"),
    path("user/user_logout", views.user_logout, name="user_logout"),
    path("user/curr_user", views.curr_user, name="curr_user"),
    path("journal/tracker", views.index, name="journal_tracker"),
    path("journal/category", views.index, name="journal_category"),
    path("mood/tracker", views.index, name="mood_tracker"),
    path("api/v1/emojis", views.Emojis, name="emoji"),
    path("api/v1/quotes", views.Quotes, name="quotes"),
    path("api/v1/calendar", views.Calendar, name="calendar"),
    path("api/v1/journaltracker", views.Journal_Tracker, name="journal_tracker"),
    path("api/v1/moodtracker", views.Mood_Tracker, name="mood_tracker"),
    path("api/v1/categories", views.Categories, name="categories"),
    path("api/v1/promptresponse", views.Prompt_Response, name="promptresponse"),
    path("api/v1/siteprompt", views.Site_Prompt, name="site_prompt"),
    path("api/v1/userprompt", views.User_Prompt, name="user_prompt"),

]
