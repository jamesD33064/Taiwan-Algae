import datetime
import urllib3
import boto3

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    obj = s3.Object('class-3069', 'D0957174/website/js/index.js')
    body = obj.get()['Body'].read().decode('utf-8') 
    
    target1_pos = body.find("days")
    target1_start_pos = body.find("=", target1_pos)
    target1_end_pos = body.find(";", target1_pos)
    target2_pos = body.find("hours")
    target2_start_pos = body.find("=", target2_pos)
    target2_end_pos = body.find(";", target2_pos)
    
    a=datetime.date.today()
    b = datetime.date(2021, 12, 19)
    day=str((a-b).days)
    now = datetime.datetime.now()
    if(now.hour<8):
        hour=str(now.hour+16)
    else :
        hour=str(now.hour-8)
    new_body = body[:target1_start_pos] +"="+ day + body[target1_end_pos:target2_start_pos]+"="+ hour + body[target2_end_pos:]
    obj.put(Body = new_body)
    
    vote('https://www.cec.gov.tw/pc/zh_TW/04/10017000000000000.html','a_0','b_0') #基隆
    vote('https://www.cec.gov.tw/pc/zh_TW/04/10002000000000000.html','a_1','b_1') #宜蘭
    vote('https://www.cec.gov.tw/pc/zh_TW/04/63000000000000000.html','a_2','b_2') #台北
    vote('https://www.cec.gov.tw/pc/zh_TW/04/65000000000000000.html','a_3','b_3') #新北
    vote('https://www.cec.gov.tw/pc/zh_TW/04/68000000000000000.html','a_4','b_4') #桃園
    vote('https://www.cec.gov.tw/pc/zh_TW/04/10004000000000000.html','a_5','b_5') #新竹縣
    vote('https://www.cec.gov.tw/pc/zh_TW/04/10018000000000000.html','a_6','b_6') #新竹市
    
    return {
        'statusCode': 200,
        'body': "updated"
    }
    
def vote(url,a_0,b_0):
    http = urllib3.PoolManager()
    response = http.request("GET",url)
    b=response.data.decode("utf-8").split('<tr class="trT">')[1].split("<td>")[2].split("</td>")[0]
    b=b.replace(',','')
    print(b)
    c=response.data.decode("utf-8").split('<tr class="trT">')[1].split("<td>")[3].split("</td>")[0]
    c=c.replace(',','')
    print(c)
    d=response.data.decode("utf-8").split('<tr class="trT">')[1].split("<td>")[4].split("</td>")[0]
    d=d.replace(',','')
    print(d)
    print(str(int(d)/int(c)*100))
    print(str(int(b)/int(c)*100))
    
    s3 = boto3.resource('s3')
    obj = s3.Object('class-3069', 'D0957174/website/js/vote.js')
    body = obj.get()['Body'].read().decode('utf-8') 
    
    target1_pos = body.find(a_0)
    target1_start_pos = body.find("=", target1_pos)
    target1_end_pos = body.find(";", target1_pos)
    target2_pos = body.find(b_0)
    target2_start_pos = body.find("=", target2_pos)
    target2_end_pos = body.find(";", target2_pos)
    
    new_body = body[:target1_start_pos] +"="+ str(int(d)/int(c)*100) +body[target1_end_pos:target2_start_pos] +"="+str(int(b)/int(c)*100)+ body[target2_end_pos:]
    obj.put(Body = new_body)    
