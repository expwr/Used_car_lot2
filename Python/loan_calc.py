import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
import time
cred_obj = credentials.Certificate("C:\\Users\\Factor_Jon\\Documents\\GitHub\\Used_car_lot2\\Python\\usedcarlotloanest-firebase-adminsdk-6u58m-94103d56e0.json")
default_app = firebase_admin.initialize_app(cred_obj)


db=firestore.client()
db.collection("LoanUserData").order_by("timestamp" 'desc')
allData = []
docs = db.collection('LoanUserData').get()
for doc in docs:
    allData = doc.to_dict()
intrest=0




credit=int(allData['credit'])
downPay=int(allData['downpay'])
length=int(allData['length'])
Price=int(allData['price'])
print(allData)
def intrests():

    global intrest, credit
    
    if credit >= 781:
        intrest = 3.68
    elif credit >= 660:
        intrest = 5.53
    elif credit >= 600:
        intrest = 10.33
    elif credit >= 500:
        intrest += 16.85
    elif credit >= 300:
        intrest = 20.43
    elif credit <= 299:
        print('too low score')
        intrest = 1
    else:
        print('ERROR')

    
    
intrests()
def total():
    global length, intrest, Price, monthly, yearly

    intrest = intrest * 0.01
    monthly = (intrest/12) * (1/(1-(1+intrest/12)**(-length)))*Price
    yearly = monthly * 12
total()

print(intrest, credit, monthly, yearly)
timestamp = firestore.SERVER_TIMESTAMP
db.collection('Output').add({'monthly':monthly,'yearly':yearly,'Timestamp': timestamp})