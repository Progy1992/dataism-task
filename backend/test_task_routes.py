import json
import pytest
from unittest.mock import patch
from app import create_app
from app.models.task_model import Task
from app.service.task_service import TaskService


@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    client = app.test_client()
    with app.app_context():
        yield client


@patch.object(TaskService, 'get_all_tasks', return_value=[{
                                                                "created_at": "Thu, 10 Aug 2023 17:41:07 GMT",
                                                                "description": "xyz updated 2 category description",
                                                                "id": "9f84e830-b504-4b45-a269-33c27db1eff8",
                                                                "name": "abc category",
                                                                "updated_at": "Fri, 11 Aug 2023 09:52:53 GMT"
                                                            }])
def test_get_all_tasks(mock_get_all_tasks, client):
    response = client.get('/api/v1/tasks')
    data = json.loads(response.data)

    assert response.status_code == 200
    assert 'data' in data
    assert 'message' in data


@patch.object(TaskService, 'get_task_by_id', return_value={
                                                                "created_at": "Thu, 10 Aug 2023 17:41:07 GMT",
                                                                "description": "xyz updated 2 category description",
                                                                "id": "9f84e830-b504-4b45-a269-33c27db1eff8",
                                                                "name": "abc category",
                                                                "updated_at": "Fri, 11 Aug 2023 09:52:53 GMT"
                                                            })
def test_get_task_by_id(mock_get_task_by_id, client):
    response = client.get('/api/v1/tasks/1')
    data = json.loads(response.data)

    assert response.status_code == 200
    assert 'data' in data
    assert 'message' in data


@patch.object(TaskService, 'create_task')
def test_create_task(mock_create_task, client):
    task_data = {"name": "New Task"}
    response = client.post('/api/v1/tasks/', json=task_data)

    assert response.status_code == 201
    assert b'Task created successfully' in response.data


@patch.object(TaskService, 'edit_task_details')
def test_edit_task(mock_edit_task, client):
    task_data = {"name": "Updated Task"}
    response = client.put('/api/v1/tasks/1', json=task_data)

    assert response.status_code == 200
    assert b'Task updated successfully' in response.data


@patch.object(TaskService, 'delete_task')
def test_delete_task(mock_delete_task, client):
    response = client.delete('/api/v1/tasks/1')

    assert response.status_code == 200
    assert b'Task deleted successfully' in response.data
