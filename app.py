from copy import deepcopy
from flask import Flask, jsonify, request
import json

import sympy

app = Flask(__name__)

def update_context(id_, context=None):
    source = open('problems/%s.py' % id_).read()
    locs = locals()
    exec(source)
    update = locs.get('update')
    return update(context)

@app.route('/api/<id_>', methods=['GET'])
def get(id_):
  initial_context = update_context(id_)
  return jsonify(initial_context)

@app.route('/api', methods=['POST'])
def post():
    context = request.get_json()
    new_context = update_context('p1', context)
    return jsonify(new_context)

if __name__ == '__main__':
    app.run()
