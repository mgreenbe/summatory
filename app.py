from copy import deepcopy
from flask import Flask, jsonify, request
import sys
import json

import sympy

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def hello():
  return "Message received!"

if __name__ == '__main__':
    app.run()
