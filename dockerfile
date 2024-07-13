# Frontend stage
FROM node:14 AS frontend-build

WORKDIR /usr/src/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Backend stage
FROM node:14 AS backend-build

WORKDIR /usr/src/backend

COPY backend/package*.json ./
RUN npm install

COPY backend/ ./

# Copy frontend build to backend
COPY --from=frontend-build /usr/src/frontend/build ./public

EXPOSE 5000

CMD ["npm", "start"]
