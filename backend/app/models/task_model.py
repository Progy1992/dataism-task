from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import uuid
from ..extensions import db

class Task(db.Model):
    """
    Represents a task in the application.

    This class defines the structure of a task entity, including its attributes such as
    ID, name, description, creation timestamp, and last updated timestamp.

    Attributes:
        id (str): The unique identifier for the task, generated using a UUID.
        name (str): The name of the task.
        description (str): A description of the task.
        created_at (datetime): The timestamp when the task was created.
        updated_at (datetime): The timestamp when the task was last updated.

    Methods:
        __repr__: Returns a string representation of the Task instance.
        serialize: Returns a dictionary containing serialized task information.

    Example:
        task = Task(name='Complete project', description='Finish the assignment')
        serialized_data = task.serialize()
        print(serialized_data)  # Output: {'id': ..., 'name': ..., 'description': ..., ...}
    """

    id = db.Column(db.String, primary_key=True,
                   default=str(uuid.uuid4()), unique=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=None, onupdate=datetime.utcnow)

    def __repr__(self):
        """
        Returns a string representation of the Task instance.
        """
        return f'<Task {self.id} : {self.name} : {self.created_at}>'
    
    def serialize(self):
        """
        Serialize the Task instance into a dictionary.

        Returns:
            dict: A dictionary containing serialized task attributes.
        """
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
