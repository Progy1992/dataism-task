from ..models.task_model import Task
from ..database.memory_database import InMemoryDatabase
from ..logger import logger


class TaskService:
    """
    Service class for managing tasks using a database.

    This class provides methods to perform CRUD (Create, Read, Update, Delete)
    operations on tasks using an underlying database. It handles exceptions that
    might arise during database operations.

    Attributes:
        database (BaseDatabase): The database instance used for storing and retrieving
            task records.

    Example:
        task_service = TaskService()
        all_tasks = task_service.get_all_tasks()
        task = task_service.get_task_by_id(task_id=123)
        new_task = task_service.create_task(task_details)
        task_service.edit_task_details(task_id=123, task_details=new_details)
        task_service.delete_task(task_id=123)
    """

    def __init__(self):
        """
        Initialize the TaskService with a database instance.
        """
        self.database = self.__init_database()

    def __init_database(self):
        """
        Initialize and return an instance of the database.

        Returns:
            BaseDatabase: An instance of the database.
        """
        task_db = InMemoryDatabase()  # Replace with the actual database class and instance
        return task_db

    def get_all_tasks(self):
        """
        Retrieve all tasks from the database.

        Returns:
            list: A list of all task records.
        Raises:
            Exception: If an error occurs during the database operation.
        """
        try:
            # Replace 'Task' with your task class
            return self.database.fetch_all_records(Task)
        except Exception as e:
            logger.exception(str(e))
            raise Exception(e)

    def get_task_by_id(self, task_id):
        """
        Retrieve a task by its ID.

        Args:
            task_id (int): The ID of the task to retrieve.

        Returns:
            Task: The task record with the given ID.
        Raises:
            Exception: If the task with the provided ID is not found or if an error
                occurs during the database operation.
        """
        try:
            # Replace 'Task' with your task class
            return self.database.fetch_by_id(task_id, Task)
        except Exception as e:
            logger.exception(str(e))
            raise Exception(e)

    def create_task(self, task_details):
        """
        Create a new task.

        Args:
            task_details (dict): Details of the task to be created.

        Returns:
            Task: The newly created task record.
        Raises:
            Exception: If an error occurs during the database operation.
        """
        try:
            # Replace 'Task' with your task class
            return self.database.create_record(Task, task_details)
        except Exception as e:
            logger.exception(str(e))
            raise Exception(e)

    def edit_task_details(self, task_id, task_details):
        """
        Edit the details of a task.

        Args:
            task_id (int): The ID of the task to be edited.
            task_details (dict): Updated details for the task.

        Returns:
            Task: The edited task record.
        Raises:
            Exception: If the task with the provided ID is not found or if an error
                occurs during the database operation.
        """
        try:
            # Replace 'Task' with your task class
            return self.database.edit_record(Task, task_id, task_details)
        except Exception as e:
            logger.exception(str(e))
            raise Exception(e)

    def delete_task(self, task_id):
        """
        Delete a task.

        Args:
            task_id (int): The ID of the task to be deleted.

        Returns:
            bool: True if the deletion was successful, False otherwise.
        Raises:
            Exception: If the task with the provided ID is not found or if an error
                occurs during the database operation.
        """
        try:
            # Replace 'Task' with your task class
            return self.database.delete_record(Task, task_id)
        except Exception as e:
            logger.exception(str(e))
            raise Exception(e)
