from  rest_framework import serializers
from .models import Member,Account,Transaction,Loan,LoanRepayment,calculate_payment


class  MemberSerializer(serializers.ModelSerializer):
    model  = 'Member'
    fields  = ("userID ","name","password","email")
    
    
    
    
    
class AccountSerializer(serializers.ModelSerializer):
    model = 'Account'
    fields  = ("accounttype","balance","openedDate","lasttransactionDate")   
    
    
    
    
class  TransactionSerializer(serializers.ModelSerializer):
        model  = 'Transaction'
        fields  = ("transactionType","amount","transactionDate","description","sender","reciever")
        
        
class LoanSerializer(serializers.ModelSerializer):
       model  =  'Loan'
       fields = ("loanAmount","interestRate","startDate","endDate","status")
       
       
       
                   
class  LoanRepaymentSerializer(serializers.ModelSerializer):
       model  = 'LoanRepayment' 
       fields  = ("paymentAmount","paymentDate","status")   
    
    
class  calculate_paymentSerializer(serializers.ModelSerializer):
       model  = 'calculate_payment'
       fields  = ("amount","paymentAmount")
      