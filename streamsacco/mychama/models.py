from django.db import models



class Member(models.Model):
    userID = models.UUIDField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=100, unique=True)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']


class  Account(models.Model):
    accountID = models.UUIDField(primary_key=True)
    userID = models.ForeignKey(Member, on_delete=models.CASCADE)
    accounttype = models.CharField(max_length=20)
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    openedDate = models.DateTimeField(auto_now_add=True)
    lasttransactionDate = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.accounttype
    
    class Meta:
        ordering = ['accounttype']


class Transaction:
    transactionID = models.UUIDField(primary_key=True)
    userID = models.ForeignKey(Member, on_delete=models.CASCADE)
    transactionType = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transactionDate = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    sender = models.CharField(max_length=80)
    reciever = models.CharField(max_length=80)
    
    def __str__(self):
        return self.transactionType
    class Meta:
        ordering = ['transaction_type']
        

class Loan(models.Model):
    loanID = models.UUIDField(primary_key=True)
    userID = models.ForeignKey(Member, on_delete=models.CASCADE)
    loanAmount = models.DecimalField(max_digits=10, decimal_places=2)
    interestRate = models.DecimalField(max_digits=10, decimal_places=2)
    startDate = models.DateTimeField(auto_now_add=True)
    endDate = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status
    
    class Meta:
        ordering = ['status']


class LoanRepayment(models.Model):
    repaymentID = models.UUIDField(primary_key=True)
    loanID = models.ForeignKey(Loan, on_delete=models.CASCADE)
    paymentAmount = models.DecimalField(max_digit=10, decimal_places=2)
    paymentDate = models.DateTimeField(auto_now_add=True)
    status = models.ForeignKey(Loan, on_delete=models.CASCADE)

    def __str__(self):
        return self.status
    
    class Meta:
        ordering = ['status']
    
    def calculate_payment(self):
        amount = Loan.loanAmount * Loan.interestRate / 100
        paymentAmount = Loan.loanAmount + amount
        
        return paymentAmount
    

