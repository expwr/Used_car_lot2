from flask import Flask, render_template, request
import json

app = Flask(__name__)

app.debug = True

@app.route('/')
def index():
    price = request.args.get("PRICE")
    var = 100
    # http://127.0.0.1:5000?PRICE=100&DOWN=100&LENGTH=100&CREDIT=100
    # get the loan
    return "monthly:100, yearly:" 


if __name__ == '__main__':
    app.run()