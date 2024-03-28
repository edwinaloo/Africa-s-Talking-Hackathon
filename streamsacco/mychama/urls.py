from django.urls import path
from rest_framework.routers import DefaultRouter
from mychama.views import MemberViewSet, LoginAPIView

router = DefaultRouter()
router.register(r'members', MemberViewSet, basename='member')

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
]

urlpatterns += router.urls
