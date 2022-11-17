from flask import Flask, render_template, request
import json

app = Flask(__name__)

app.debug = True

@app.route('/')
def index():
    print("got message")
    #price = request.args.get("PRICE")
    var = 100
    # get the loan
    return "monthly:100, yearly:100" 


if __name__ == '__main__':
    app.run()