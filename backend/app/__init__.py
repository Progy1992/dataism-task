from .controllers.task_controllers import task_blue_print
from flask import Flask, jsonify
from .extensions import db
from flask_cors import CORS
from .custom_exceptions import TaskNotFoundException

def create_app():
    """
    Factory function to create a Flask application instance.

    This function creates and configures a Flask application. It registers the
    task blueprint, configures the database URI, registers extensions, and
    returns the configured app instance.

    Returns:
        Flask: The configured Flask application instance.
    """
    app = Flask(__name__)
    app.register_blueprint(task_blue_print)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
    __register_extensions(app)
    return app

def __register_extensions(app):
    """
    Register Flask extensions with the app and create database tables.

    Args:
        app (Flask): The Flask application instance to register extensions for.
    """
    db.init_app(app)
    with app.app_context():
        db.create_all()

app = create_app()
CORS(app)

@app.errorhandler(TaskNotFoundException)
def handle_task_not_found_exception(error):
    """
    Handle TaskNotFoundException and return a JSON response.

    Args:
        error (TaskNotFoundException): The raised exception.

    Returns:
        Response: A JSON response containing the error message.
    """
    response = jsonify({'error': error.message})
    return response

