#!/bin/bash

#!/bin/bash

if [ ! -f .env ]; then
    echo "Creating docker .env file with default values..."

    mongo_password=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | base64)
    auth_secret=$(dd if=/dev/urandom bs=32 count=1 2>/dev/null | base64)

    echo "mongo_password=$mongo_password" >> .env
    echo "auth_secret=$auth_secret" >> .env
    echo "API_URL=http://127.0.0.1:5000" >> .env
    echo "api_key=some_api_key" >> .env
fi

if [ ! -d ./backend/node_modules ]; then
    echo "Installing backend dependencies..."
    cd backend
    npm install
    cd ..
fi

if [ ! -d ./frontend/node_modules ]; then
    echo "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi

if [ -f "./run.sh" ]; then
    chmod u+rwx "./run.sh"
    dos2unix "./run.sh"
else
    echo "Could not find run.sh file. Your repository may be corrupted, or need to be re-pulled."
fi

