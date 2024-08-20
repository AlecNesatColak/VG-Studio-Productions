#!/bin/bash

# Step 1: Build Docker images and set up containers
echo "Building Docker containers..."
docker-compose build

# Step 2: Start Docker containers
echo "Starting Docker containers..."
docker-compose up -d

# Step 3: Display running containers
docker ps

# Step 4: Display logs for all running containers
echo "Displaying logs for all running containers..."
docker-compose logs -f

# Step 5: Setup complete
echo "Setup complete! Docker containers are running and logs are being displayed."
