from django.shortcuts import render
from django.contrib import auth
from django.shortcuts import render,HttpResponseRedirect,redirect

# Create your views here.
def login(request):
        return render(request, 'login.html')

def home(request):
        return render(request,'home.html')