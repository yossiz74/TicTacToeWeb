from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return 'Hello, world!'


if __name__ == "__main__":
    # Run the app on port 5000
    app.run(port=5000)
