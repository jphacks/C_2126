from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

#from utils import message_creater
#from line_bot_ai.line_bot import requests

from linebot import LineBotApi
from linebot.models import TextSendMessage
from linebot.exceptions import LineBotApiError
import requests 
import random

from api.views import FoodViewSet

# 実際は、環境変数からトークンの値を取得するなどの対策をした方が良いです。
ACCESS_TOKEN = "9rUorfOe9mHrrXUqgkN2F5"

list_expired = FoodViewSet.get_expired


message = """賞味期限情報
"""

for i in range(len(list_expired)):
  title = list_expired[i]["title"]
  expired = list_expired[i]["title"]
  if expired > 0:
    message+="""
    {title}:賞味期限まであと{expired}日です"""
  elif expired == 0:
    message+="""
    {title}:賞味期限当日です"""
  else:
    message+="""
    {title}:賞味期限を{expired}日過ぎています"""


headers = {"Authorization": "Bearer {ACCESS_TOKEN}"}

data = {
  "message": message
}

requests.post(
  "https://notify-api.line.me/api/notify",
  headers=headers,
  data=data,
  )

"""
@csrf_exempt
def index(request):
    if request.method == 'POST':
        request = json.loads(request.body.decode('utf-8'))
        data = request['events'][0]
        message = data['message']
        reply_token = data['replyToken']
        line_message = LineMessage(message_creater.create_single_text_message(message['text']))
        line_message.reply(reply_token)
        return HttpResponse("ok")
        """