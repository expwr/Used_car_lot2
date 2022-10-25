Credit = int(input("Credit Score: "))
APR = 0

if Credit < 300:
    print("Sorry you cannot apply for a Car loan at this time, Thank You for your time")
elif Credit < 500:
    APR =+ 20.43
    print("Your rates are", APR,"%" )
    
    
elif Credit < 600:
    APR =+ 16.85
    print("Your rates are", APR,"%" )
    

elif Credit < 660:
    APR =+ 10.33
    print("Your rates are", APR,"%" )

elif Credit < 780:
    APR =+ 5.53
    print("Your rates are", APR,"%" )
    

elif Credit < 850:
    APR =+ 3.68
    print("Your rates are", APR,"%" )
    

elif Credit > 850:
    APR = .5
    print("Your rates are", APR,"%" )




