from flask import jsonify, request, Blueprint
from ..service.task_service import TaskService
from ..logger import logger
from ..models.pydantick_task_model import TaskModel
from pydantic import ValidationError

task_blue_print = Blueprint('task_routes', __name__)
task_svc = TaskService()

@task_blue_print.route('/api/v1/tasks', methods=['GET'])
def get_all_tasks_api():
    """
    Get a list of all tasks using the API.

    Returns:
        Response: JSON response containing a list of tasks and a success message.
    """
    try:
        tasks = task_svc.get_all_tasks()
        return jsonify({'data': tasks, 'message': 'Successfully retrieved all the tasks'}), 200
    except Exception as e:
        logger.exception(str(e))
        return jsonify({'error': str(e), 'message': 'Error while retrieving all tasks.'}), 500

@task_blue_print.route('/api/v1/tasks/<string:task_id>', methods=['GET'])
def get_task_by_id_api(task_id):
    """
    Get details of a task by its ID using the API.

    Args:
        task_id (str): The ID of the task to retrieve.

    Returns:
        Response: JSON response containing task details and a success message.
    """
    try:
        task_object = task_svc.get_task_by_id(task_id)
        return jsonify({'data': task_object, 'message': 'Task details retrieved successfully.'}), 200
    except Exception as e:
        logger.exception(str(e))
        return jsonify({'error': str(e), 'message': 'Error while retrieving task details.'}), 500

@task_blue_print.route('/api/v1/tasks/', methods=['POST'])
def create_task_api():
    """
    Create a new task using the API.

    Returns:
        Response: JSON response with a success message for task creation.

    Raises:
        ValidationError: If the request data does not match the expected format.
    """
    try:
        task_data = request.json
        task_model_check = TaskModel(**task_data)  # Validate the data using Pydantic model
        task_svc.create_task(task_data)
        return jsonify({'message': 'Task created successfully'}), 201
    except ValidationError as e:
        return jsonify({'error': 'Validation error', 'message': str(e)}), 400
    except Exception as e:
        logger.exception(str(e))
        return jsonify({'error': str(e), 'message': 'Error while creating a task.'}), 500

@task_blue_print.route('/api/v1/tasks/<string:task_id>', methods=['PUT'])
def edit_task_api(task_id):
    """
    Edit details of a task by its ID using the API.

    Args:
        task_id (str): The ID of the task to edit.

    Returns:
        Response: JSON response with a success message for task editing.

    Raises:
        ValidationError: If the request data does not match the expected format.
    """
    try:
        task_data = request.json
        task_edit_check = TaskModel(**task_data)  # Validate the data using Pydantic model
        task_svc.edit_task_details(task_id, task_data)
        return jsonify({'message': 'Task updated successfully'}), 200
    except ValidationError as e:
        return jsonify({'error': 'Validation error', 'message': str(e)}), 400
    except Exception as e:
        logger.exception(str(e))
        return jsonify({'error': str(e), 'message': 'Error while editing task details.'}), 500

@task_blue_print.route('/api/v1/tasks/<string:task_id>', methods=['DELETE'])
def delete_task_api(task_id):
    """
    Delete a task by its ID using the API.

    Args:
        task_id (str): The ID of the task to delete.

    Returns:
        Response: JSON response with a success message for task deletion.
    """
    try:
        task_svc.delete_task(task_id)
        return jsonify({'message': 'Task deleted successfully'}), 200
    except Exception as e:
        logger.exception(str(e))
        return jsonify({'error': str(e), 'message': 'Error while deleting a task.'}), 500
