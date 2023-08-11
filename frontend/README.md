# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Running React Application Using Docker Build

## Steps

### 1. Build the Docker Image

In the terminal, navigate to your project directory and build the Docker image:

```bash
docker build -t frontend .
```

### 2. Run the Docker Container

Once the image is built, you can run the Docker container:

```bash
docker run -d -p 3001:3000 frontend
```

Your Flask app will be accessible at `http://localhost:8000`.