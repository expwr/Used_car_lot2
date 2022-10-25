#Keywords to detect
#looking for a blue 1970 nissan pickup
searching = ['looking', 'trying to find', 'searching for']
colors = ['white', 'black', 'gray', 'grey', 'silver', 'red', 'blue', 'brown', 'green', 'beige', 'orange', 'gold', 'yellow', 'purple', ]
car_brands = ['abarth', 'alfa romeo', 'aston martin', 'audi', 'bentley', 'bmw', 'bugatti', 'cadillac', 'chevrolet', 'chrysler', 'citroën', 'dacia', 'daewoo', 'daihatsu', 'dodge', 'donkervoort', "delorean"
'ds', 'ferrari', 'fiat', 'fisker', 'ford', 'honda', 'hummer', 'hyundai', 'infiniti', 'iveco', 'jaguar', 'jeep', 'kia', 'ktm', 'lada', 'lamborghini', 'lancia', 'land rover', 'landwind', 'lexus', 
'lotus', 'maserati', 'maybach', 'mazda', 'mclaren', 'mercedes-benz', 'mg', 'mini', 'mitsubishi', 'morgan', 'nissan', 'opel', 'peugeot', 'porsche', 'renault', 'rolls-royce', 'rover', 'saab',
'seat', 'skoda', 'smart', 'ssangyong', 'subaru', 'suzuki', 'tesla', 'toyota', 'volkswagen'] 
years = ['1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', 
'1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', 
'1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', 
'1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
car_type = ['hatchback', 'sedan', 'suv', 'muv', 'coupe', 'convertible', 'pickup truck', 'pickup', 'truck', 'jeep']
users_desired_car = ['null', 'null', 'null', 'null']

#First Message
print("-------------------------------------------------------------\n    Hello! If you have any troubles, please message here.\n-------------------------------------------------------------")
#Input
user = input("Message: ")
#Splits the string into individual words
user1 = user.split()
#Sorts through all the words and sees if they match a color, year, brand and type and adds the results to a list
for i in range(len(user1)):
    if user1[i] in colors:
        users_desired_car[3] = (user1[i])
    if user1[i] in car_brands:
        users_desired_car[0] = (user1[i])
    if user1[i] in years:
        users_desired_car[2] = (user1[i])
    if user1[i] in car_type:
        users_desired_car[1] = (user1[i])

#|TEMPORARY|Prints the list 
print(users_desired_car)


    
 