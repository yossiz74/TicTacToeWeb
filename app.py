from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


if __name__ == "__main__":
    # Run the app on port 5000
    app.run(port=5000)
