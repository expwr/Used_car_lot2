from flask import Flask,  request
import json
app = Flask(__name__)

app.debug = True

@app.route('/result', methods=['GET', 'POST'])
def index():
    def get():
        if request.method == 'POST':
            global credit, length, price
            request_data = request.get_json() 
            credit = request_data['credit'] 
            length = request_data['length'] 
            price = request_data['price'] 
            return 'credit: {}'.format(credit)
            
        else:
            return 'cred: cr'
    get()
    def calculate():
        global credit, length, price
        credit = int(credit)
        length = int(length)
        price = int(price)
        intrest = 17 - ((credit/50)*.5)+4
        monthly = ((intrest/12) * (1/(1-(1+intrest/12)**(-length)))*price)
        monTax = monthly * .0575
        monTot = monTax + monthly
        yearly = monthly * 12
        yearTax = yearly * .0575
        yearlytot = yearly + yearTax
        
        return '''
        credit: {}
        length: {}
        price: {}
        intrest: {}
        monthly: {}
        monTax: {}
        monTot: {}
        yearly: {}
        yearTax: {}
        yearlytot: {}
        '''.format(credit,length,price,intrest,monthly,monTax,monTot,yearly,yearTax,yearlytot)
    calculate()
    return 'none'

if __name__ == '__main__':
    app.run()