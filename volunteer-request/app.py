from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    age = request.form['age']
    gender = request.form['gender']
    field = request.form['field']
    # You can add code here to process/store the data
    return f'Thank you {name}, volunteer details received'

if __name__ == '__main__':
    app.run(debug=True)
