from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/football_model')

def home():
    return render_template('model1.html')