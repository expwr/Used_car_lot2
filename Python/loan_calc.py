
credit = input('Heyyy:')
credit = int(credit)
intrest = 0
length = 12
Price = 10000
x = True
def intrests():

    global x, intrest, credit
    
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