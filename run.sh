#!/bin/bash

# Start the containers without rebuilding them
echo "Starting Docker containers..."
docker-compose up -d

# Show the status of running containers
echo "Displaying status of running containers..."
docker ps

# Output success message
echo "Containers are up and running!"
