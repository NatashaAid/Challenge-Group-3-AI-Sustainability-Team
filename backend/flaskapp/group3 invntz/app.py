from flask import Flask, jsonify, render_template, request
from flask_mysqldb import MySQL
import os

app = Flask(__name__)

# Database configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'J0hanna18'
app.config['MYSQL_DB'] = 'ivntz'  # Database name for dummy data


UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initialize MySQL
mysql = MySQL(app)

@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        try:
            filename = request.form['filename']
            image_data= request.form['']
            cur = mysql.connection.cursor()
            cur.execute('INSERT INTO saved_images(filename, image_data) VALUES (%s, %s)', (filename, image_data))
            mysql.connection.commit()
            cur.close()
        except Exception as e:
            print(f"An error occurred: {e}")
            return jsonify({'error': 'An error occurred while saving data.'})

    return render_template('index.html')


##-------------- form for images being sent to the database 

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




app.route('/', methods=['GET', 'POST'])
def upload_image():
    if request.method == 'POST':
        # Check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['file']
        
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if file and allowed_file(file.filename):
            
            filename = file.filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
            # Insert the filename into the database
            cur = mysql.connection.cursor()
            cur.execute('INSERT INTO saved_image(filename) VALUES (%s)', (filename,))
            mysql.connection.commit()
            cur.close()
            
            flash('File successfully uploaded and saved in database')
            return redirect(url_for('upload_image'))

    return render_template('index.html')




app.secret_key = 'supersecretkey'
if __name__ == '__main__':
    app.run(debug=True)
