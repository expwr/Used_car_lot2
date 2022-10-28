#Def Var


price = 0
length = 0
intrest = 0
downPay = 0
TradeInYN = None
TradeIn = 0
Tax = 0.07
Fees = 0
credit = 0
DTIYN = "N"
DTIn = 0
incomeYN = "N"
income = 0
carLux = False
FabPro = 'N'
PaintPro = 'N'
VinEtch = "Y"
RustPro = 'N'

# Inputs

price = input("What is the cars price? ")
length = input("How long would you like the loan to last in months? ")
downPay = input("How much would you like to put down? ")
TradeInYN = input("Would you like to trade in your car(Y/N)? ")

if TradeInYN == "Y" or TradeInYN == "y":
    TradeIn = input("What price did you buy the car for? ")
    TradeInTime = input("How long have you had this car? ")
    TradeInCond = input("What is the condition of the car? ")

elif TradeInYN == 'N' or TradeInYN == 'n':
    pass

else:
    print("OK")

credit = input("What is your credit score?:")
DTIYN = input("Do you know your debt to income? (Y/N):")

if DTIYN == "Y" or DTIYN == "y":
    DTIn = input("What is your debt to income ratio?:")

elif DTIYN == "N" or DTIYN == "n":
    DTIn = 0
    incomeYN = input("Do you know your Income?(Y/N): ")
else: 
    print("Please typr Y or N in the awnser box")


if incomeYN == "Y" or incomeYN == "y":
    income = input("What is your income?: ")

elif incomeYN == "N" or incomeYN == "n":
    income = 0
else: 
    print("please input either a Y or N")

FabPro = input('Would you like fabric protection? (Y/N): ')
PaintPro = input('Would you like paint protection?(Y/N):')
VinEtch = input('would you like your Vin Etched?(Y/N): ')
RustPro = input('Would you like Rust Protection? (Y/N): ')
# Make the y/n buttons insted of inputs
# Make it loop the input if no y or n ^^^

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
if FabPro == "Y" or FabPro == 'y':
    Fees += 300
elif FabPro == "N" or FabPro == 'n':
    Fees += 0
else:
    print('please input a Y or N')
# Paint Protection
if PaintPro == "Y" or PaintPro == 'y':
    Fees += 1250
elif PaintPro == "N" or PaintPro == 'n':
    Fees += 0
else:
    print('please input a Y or N: ')
# vin etching
if VinEtch == "Y" or  VinEtch == 'y':
    Fees += 200
elif VinEtch == "N" or  VinEtch == 'n':
    Fees += 0
else:
    print('please input a Y or N: ')
#Rust Protection
if RustPro == "Y" or RustPro == 'y':
    Fees += 400
elif RustPro == "N" or RustPro == 'n':
    Fees += 0
else:
    print('please input a Y or N')

# Calculator part
# intrest rate






# total loan amount
Loanamt = int(price) - int(downPay)
# Monthy cost
Monthly = Loanamt * int(intrest) / int(length)
# total
total = (int(Loanamt) * int(intrest)) + (int(Loanamt) * int(Tax)) + int(Loanamt)
print(total)
