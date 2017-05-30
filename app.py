from copy import deepcopy
from flask import Flask, jsonify, request
import sys
import json

import sympy

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def get():
  A = sympy.Matrix([[1,2],[0,1]])
  B = sympy.Matrix([[1], [1]])
  response = jsonify({'A': sympy.latex(A), 'B': sympy.latex(b)})
  return response;

@app.route('/api', methods=['POST'])
def post():
  print(request.is_json)
  print(request.get_json())
  return "Message received!"



if __name__ == '__main__':
    app.run()
