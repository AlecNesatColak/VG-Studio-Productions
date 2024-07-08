./setup.sh

cd backend
docker compose build
docker compose up &

cd ../frontend
npm start #--open
wait