from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv() 

app = Flask(__name__)

# Configure MySQL connection
db = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME")
)

cursor = db.cursor()

@app.route('/')
def index():
    cursor.execute("SELECT * FROM employees")
    employees = cursor.fetchall()
    return render_template('index.html', employees=employees)

@app.route('/add', methods=['GET', 'POST'])
def add_employee():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['text']
        position = request.form['position']
        salary = request.form['salary']

        cursor.execute("INSERT INTO employees (first_name, last_name, email, position, salary) VALUES (%s, %s, %s, %s, %s)", 
                       (first_name, last_name, email, position, salary))
        db.commit()
        return redirect(url_for('index'))

    return render_template('add_employee.html')

@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_employee(id):
    cursor.execute("SELECT * FROM employees WHERE id=%s", (id,))
    employee = cursor.fetchone()

    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['text']
        position = request.form['position']
        salary = request.form['salary']

        cursor.execute("UPDATE employees SET first_name=%s, last_name=%s, email=%s, position=%s, salary=%s WHERE id=%s",
                       (first_name, last_name, email, position, salary, id))
        db.commit()
        return redirect(url_for('index'))

    return render_template('edit_employee.html', employee=employee)

@app.route('/delete/<int:id>', methods=['GET'])
def delete_employee(id):
    cursor.execute("DELETE FROM employees WHERE id=%s", (id,))
    db.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
