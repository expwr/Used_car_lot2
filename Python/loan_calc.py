#Def Var
price = 0
length = 0
intrest = 0
downPay = 0
TradeInYN = True
TradeIn = 0
Tax = 0.07
Fees = 0
credit = 0
DTI = 0
income = 0
carLux = False
FabPro = False
PaintPro = False
VinEtch = False
RustPro = False
# Inputs
price = input("What is the cars price?:")
length = input("How long would you like the loan to last?:")
downPay = input("How much would you like to put down?:")
if TradeInYN == True:
    TradeIn = input("What price did you buy the car for")
    TradeInTime = input("How lomg have you had this car")
    TradeInCond = input("What is the comdition of the car")

# Fees

# Title
Fees += 15
# Registration
Fees += 10
# Destination Charge
Fees += 1250
# document fee
Fees += 250
# ad fee
if carLux == True:
    Fees += .02 * price
# Fabric protection
if FabPro == True:
    Fees += 300
# Paint Protection
if PaintPro == True:
    Fees += 1250
# vin etching
if VinEtch == True:
    Fees += 200
if RustPro == True:
    Fees += 400

