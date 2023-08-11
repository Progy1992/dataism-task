# Project Documentation

This repository contains two services: a **Backend Service** built with Flask for handling task operations via APIs, and a **Frontend Service** developed using React and Redux.

## Backend Service

The Backend Service is responsible for handling task-related operations through APIs. It is built using Flask, a Python web framework. The service includes APIs to perform CRUD (Create, Read, Update, Delete) operations on tasks. The API endpoints are defined in the `task_routes` Blueprint, and they interact with a database to store and retrieve task data.

### API Endpoints

1. **GET /api/v1/tasks**: Get a list of all tasks.
2. **GET /api/v1/tasks/<task_id>**: Get details of a specific task by its ID.
3. **POST /api/v1/tasks**: Create a new task.
4. **PUT /api/v1/tasks/<task_id>**: Edit details of a specific task by its ID.
5. **DELETE /api/v1/tasks/<task_id>**: Delete a task by its ID.

## Frontend Service

The Frontend Service is developed using React and Redux to provide an interactive user interface for managing tasks. It interacts with the Backend Service's APIs to fetch, display, create, update, and delete tasks. Redux is used for state management, enabling efficient communication between components.

### Redux Actions

1. **createTask**: Action to create a new task by sending a POST request to the backend API.
2. **updateTask**: Action to update an existing task using a PUT request to the backend API.
3. **fetchTask**: Action to fetch details of a specific task using a GET request.
4. **deleteTask**: Action to delete a task using a DELETE request.
5. **fetchAllTasks**: Action to fetch a list of all tasks from the backend API.

## Getting Started

1. **Backend Service**:
   - Navigate to the `backend` directory.
   - Set up a virtual environment and install dependencies: `pip install -r requirements.txt`
   - Run the Flask app: `python3 main.py`
   - Docker build command: `docker build -t backend .`
   - Docker run command: `docker run -d -p 8000:8000 backend`
   
Your Flask app will be accessible at `http://localhost:8000`.

2. **Frontend Service**:
   - Navigate to the `frontend` directory.
   - Install dependencies: `npm install`
   - Start the React app: `npm start`
   - Docker build command: `docker build -t frontend .`
   - Docker run command: `docker run -d -p 3001:3000 frontend`

Your React App will be accessible at `http://localhost:3001`.

Please ensure that you have the necessary software dependencies (Python, Node.js, etc.) installed before running the services.

## Contributions

Contributions to this project are welcome! Feel free to submit issues and pull requests to improve the services or add new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
