from flask import Flask, render_template, request
import json

app = Flask(__name__)

app.debug = True

@app.route('/result')
def index():
    print("got message")
    #price = request.args.get("PRICE")
    var = 100
    # get the loan
    return {"members": ["member1", "member2"]}


if __name__ == '__main__':
    app.run()