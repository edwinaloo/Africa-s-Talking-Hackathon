from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from django.contrib.auth import authenticate

from mychama.models import Member, Account, Transaction, Loan, LoanRepayment
from mychama.serializers import *
from mychama.services import SMSService


class MemberViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            recipients = serializer.data['phone']
            message = "Welcome to MyChama. Your account has been created successfully"
            results = SMSService().send_sms(message, recipients)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)