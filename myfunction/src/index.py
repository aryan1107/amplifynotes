from crypt import methods
from flask_cors import CORS
import awsgi
from flask import Flask, jsonify, request

BASE_ROUTE = "/summary"
app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE, methods=["GET"])
def mysummary():
    return jsonify(message='hello worlds')

def handler(event,context):
    return awsgi.response(app, event, context)

