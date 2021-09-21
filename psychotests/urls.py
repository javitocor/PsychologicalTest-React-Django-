from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from . import views
router = routers.DefaultRouter()
router.register('questions', views.PostViewSet)
 
 
urlpatterns = [
    path('', include(router.urls)),
    url(r'questions/(?P<pk>\d+)/answers/$', view=views.PostViewSet.as_view({'get':'answers', 'post':'answers'}), name='question-answers'),
    url(r'questions/(?P<pk>\d+)/answers/(?P<answer>\d+)/$', view=views.PostViewSet.as_view({'delete':'remove_answer'}), name='delete-answer')
]