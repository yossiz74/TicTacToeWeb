import pytest

from app import app


@pytest.fixture
def client():
    # create a test client that can send requests to the app
    return app.test_client()


def test_home_page(client):
    # send a GET request to the home page
    response = client.get("/")
    # check if the status code is 200 OK
    assert response.status_code == 200
    # check that index.html was loaded
    assert b'<div id="board">' in response.data
    

def test_favicon(client):
    # send a GET request to the favicon
    response = client.get("/favicon.ico")
    # check if the status code is 200 OK
    assert response.status_code == 200
