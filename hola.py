from flask import Flask, jsonify, render_template
import mysql.connector

app = Flask(__name__)

# Conectar a la base de datos MySQL
def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="tu_usuario",
        password="tu_contraseña",
        database="peceras"
    )
    return connection

# Ruta para obtener los datos
@app.route('/datos')
def obtener_datos():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM parametros_peceras")
    datos = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(datos)

# Ruta principal
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
