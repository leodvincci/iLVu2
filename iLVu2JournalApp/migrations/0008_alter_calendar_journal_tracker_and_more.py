# Generated by Django 4.2 on 2023-04-18 18:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("iLVu2JournalApp", "0007_remove_promptresponse_prompt_type_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="calendar",
            name="Journal_Tracker",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                to="iLVu2JournalApp.journaltracker",
            ),
        ),
        migrations.AlterField(
            model_name="calendar",
            name="Mood_Tracker",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                to="iLVu2JournalApp.moodtracker",
            ),
        ),
    ]
