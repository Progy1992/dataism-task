from app import *

"""
This script initializes and runs a Flask web application.

It imports the Flask app instance and then checks if the script is being
directly run (not imported as a module). If it is the main script being run,
it starts the Flask development server with debugging enabled and listens on port 8080.
You can also run the server using Gunicorn by executing the command:
    gunicorn -c gunicorn_config.py app:app

Note: For production deployments, it's recommended to use a production-ready
web server like Gunicorn or uWSGI instead of the Flask development server.

Usage:
    - Make sure the 'app' module is properly defined in the 'app.py' file.
    - Run this script to start the Flask development server for local testing.

Author:
    Harsh Dusane

Date:
    11, August, 2023

"""


if __name__ == "__main__":
    app.run(debug=True, port=8000)
    # command to run server = gunicorn -c gunicorn_config.py app:app
