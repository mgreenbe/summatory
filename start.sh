#!/bin/bash
source venv/bin/activate
export FLASK_APP=app.py
export FLASK_DEBUG=1
python3 -m flask run
