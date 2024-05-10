
from django.urls import path,include
from carapp import views

urlpatterns = [
    path('',views.login,name='home')
]