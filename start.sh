#!/bin/bash
source venv/bin/activate
export FLASK_APP=app.py
python3 -m flask run
