from flask import Flask, jsonify, render_template, send_from_directory

@app.route('/static/<path:path>')
def send_static(path):
   return send_from_directory('static', path)