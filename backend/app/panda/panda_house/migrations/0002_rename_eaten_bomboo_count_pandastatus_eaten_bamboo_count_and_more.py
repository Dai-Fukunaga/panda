# Generated by Django 4.2.2 on 2023-09-06 06:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('panda_house', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pandastatus',
            old_name='eaten_bomboo_count',
            new_name='eaten_bamboo_count',
        ),
        migrations.RenameField(
            model_name='pandastatus',
            old_name='owned_normal_bomboo_count',
            new_name='owned_normal_bamboo_count',
        ),
        migrations.RenameField(
            model_name='pandastatus',
            old_name='owned_premium_bomboo_count',
            new_name='owned_premium_bamboo_count',
        ),
    ]