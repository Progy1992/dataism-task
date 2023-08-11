# Task API Documentation

The Task API Service provides endpoints to manage tasks using a Flask Blueprint. This service handles CRUD (Create, Read, Update, Delete) operations for tasks.

## Endpoints

### Get All Tasks

Retrieve a list of all tasks.

- **URL**: `/api/v1/tasks`
- **Method**: `GET`

#### Response

- **Status Code**: 200 OK
- **Data Format**:
```json
{
    "data": [
        {
            "id": "task_id",
            "name": "Task Name",
            "description": "Task Description",
            "created_at": "2023-08-11T12:34:56Z",
            "updated_at": "2023-08-12T12:34:56Z"
        },
        // ...
    ],
    "message": "Successfully retrieved all the tasks"
}
```

### Get Task by ID

Retrieve details of a task by its ID.

- **URL**: `/api/v1/tasks/<string:task_id>`
- **Method**: `GET`

#### Response

- **Status Code**: 200 OK
- **Data Format**:
```json
{
    "data": {
        "id": "task_id",
        "name": "Task Name",
        "description": "Task Description",
        "created_at": "2023-08-11T12:34:56Z",
        "updated_at": "2023-08-12T12:34:56Z"
    },
    "message": "Task details retrieved successfully."
}
```

### Create Task

Create a new task.

- **URL**: `/api/v1/tasks/`
- **Method**: `POST`

#### Request Body

- **Data Format**:
```json
{
    "name": "New Task Name",
    "description": "New Task Description"
}
```

#### Response

- **Status Code**: 201 Created
- **Data Format**:
```json
{
    "message": "Task created successfully"
}
```

### Edit Task

Edit details of a task by its ID.

- **URL**: `/api/v1/tasks/<string:task_id>`
- **Method**: `PUT`

#### Request Body

- **Data Format**:
```json
{
    "name": "Updated Task Name",
    "description": "Updated Task Description"
}
```

#### Response

- **Status Code**: 200 OK
- **Data Format**:
```json
{
    "message": "Task updated successfully"
}
```

### Delete Task

Delete a task by its ID.

- **URL**: `/api/v1/tasks/<string:task_id>`
- **Method**: `DELETE`

#### Response

- **Status Code**: 200 OK
- **Data Format**:
```json
{
    "message": "Task deleted successfully"
}
```

# Running Flask App Using Docker Build and Gunicorn

## Steps

### 1. Build the Docker Image

In the terminal, navigate to your project directory and build the Docker image:

```bash
docker build -t backend .
```

### 2. Run the Docker Container

Once the image is built, you can run the Docker container:

```bash
docker run -d -p 8000:8000 backend
```

Your Flask app will be accessible at `http://localhost:8000`.
