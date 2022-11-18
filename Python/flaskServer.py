from flask import Flask, render_template, request
import json

app = Flask(__name__)

app.debug = True

@app.route('/result')
def index():
    #price = request.args.get("PRICE")
    var = 100
    # get the loan
    return {"credits": ["idk", "what im doing"]}


if __name__ == '__main__':
    app.run()