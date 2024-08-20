
# Docker Setup for MERN Stack Application

This guide will walk you through setting up and running the Dockerized version of your MERN stack application.

## Prerequisites

Before starting, ensure that you have Docker and Docker Compose installed on your machine:

- [Docker Installation](https://docs.docker.com/get-docker/)
- [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Project Structure

Here’s the general structure of the project:

```
project-root/
│
├── backend/                # Backend (Node.js + Express) code
│   ├── Dockerfile          # Dockerfile for the backend service
│   └── ...                 # Other backend code and files
│
├── frontend/               # Frontend (React) code
│   ├── Dockerfile          # Dockerfile for the frontend service
│   └── ...                 # Other frontend code and files
│
├── docker-compose.yml      # Docker Compose configuration
├── nuke.sh                 # Script to stop, remove, and clean Docker containers, images, and volumes
└── setup.sh            # Script to build and run Docker containers
```

## Getting Started

### 1. **Setup and Build Containers**

To set up and build the Docker containers, use the provided `setup-run.sh` script. This script will build the Docker images for both the frontend and backend and ensure everything is ready.

```bash
./setup.sh
```

This will:

- Build the Docker images for the frontend and backend services.
- Prepare everything for running the application.

### 2. **Running the Application**

After setup is complete, you can run the Docker containers using:

```bash
docker-compose up -d
```

This command will:

- Start both the frontend and backend services in detached mode (`-d`).

You can now access the application:

- **Frontend** (React): http://localhost:3000
- **Backend** (Node.js/Express): http://localhost:5001

### 3. **Stopping the Application**

To stop the application and containers, use:

```bash
docker-compose down
```

This will stop and remove the running containers.

## Cleaning Up

If you want to completely remove all Docker containers, volumes, networks, and images associated with the project, you can use the `nuke.sh` script:

```bash
./nuke.sh
```

This will:

- Stop and remove all containers created by Docker Compose.
- Remove all volumes, networks, and associated Docker images.

## Hot Reloading

### Backend (Node.js with Nodemon)

The backend is set up to use `nodemon` for hot reloading. Any changes made to the backend code will automatically trigger a reload of the server inside the Docker container.

### Frontend (React with `CHOKIDAR_USEPOLLING`)

The frontend is configured to enable hot reloading inside the Docker container using `CHOKIDAR_USEPOLLING`. This allows the React app to automatically refresh in the browser when code changes are detected.

## Additional Docker Commands

### Rebuild Containers

If you make changes to your `Dockerfile` or dependencies and need to rebuild the containers, you can run:

```bash
docker-compose build
```

### Check Running Containers

To verify which containers are currently running:

```bash
docker ps
```

### Access Container Logs

To view the logs for a specific container:

```bash
docker logs <container_name>
```

Replace `<container_name>` with the name or ID of the container you want to view.
