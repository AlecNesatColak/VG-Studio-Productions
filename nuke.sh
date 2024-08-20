#!/bin/bash

# Stop and remove all running containers, networks, and volumes created by docker-compose
docker-compose down -v --rmi all --remove-orphans

# Optionally remove all Docker containers (if there are other containers outside Compose)
docker container prune -f

# Optionally remove all Docker volumes (including non-Compose volumes)
docker volume prune -f

# Optionally remove all Docker networks
docker network prune -f

# Optionally remove all dangling images
docker image prune -f

echo "All containers, volumes, networks, and images have been removed!"
