# Generated by Django 4.2 on 2023-04-25 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("iLVu2JournalApp", "0014_moodtracker_app_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="moodtracker",
            name="date",
            field=models.DateField(auto_now_add=True, default=22.988636363636363),
            preserve_default=False,
        ),
    ]
