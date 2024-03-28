from africastalking.AfricasTalkingGateway import AfricasTalkingGateway, AfricasTalkingGatewayException
from django.conf import settings


class SMSService:
  def __init__(self):
    self.gateway = AfricasTalkingGateway(settings.AFRICAS_TALKING_USERNAME, settings.AFRICAS_TALKING_API_KEY)
    
  def send_sms(self, message, recipients):
    try:
      results = self.gateway.sendMessage(message, recipients)
      return results
    except AfricasTalkingGatewayException as e:
      print(f"Encounterred error while sending: {e}")