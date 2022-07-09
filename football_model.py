from flask import Flask


from flask import Flask

app = Flask(__name__)

@app.route('/football_model.html')

def home():
    return "<h1>Hello</h1>"

if __name__ == '__main__':
    app.run(debug=True)