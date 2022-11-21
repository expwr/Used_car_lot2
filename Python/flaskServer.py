from flask import Flask,  request
import json
app = Flask(__name__)

app.debug = True

@app.route('/result', methods=['GET', 'POST'])
def index():
    #price = request.args.get("PRICE")
    var = 100
    # get the loan
    if request.method == 'POST':
        request_data = request.get_json() 
        credit = request_data['name'] 
        return 'credit: {}'.format(credit)
    else:
        return 'cred: cr'


if __name__ == '__main__':
    app.run()