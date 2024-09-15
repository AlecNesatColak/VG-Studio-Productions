#!/bin/bash

# Step 1: Start Docker containers using docker-compose
echo "Starting Docker containers..."
docker-compose up -d --build

# Step 2: Start the backend (running on port 5000)
echo "Starting backend..."
docker exec -it $(docker ps -q -f "ancestor=vg-studio_productions_backend") bash -c "npm install && nodemon server.js"

# Step 3: Start the frontend (running on port 3000)
echo "Starting frontend..."
docker exec -it $(docker ps -q -f "ancestor=vg-studio_productions_frontend") bash -c "npm install && npm start"

echo "Containers and services are up and running!"
