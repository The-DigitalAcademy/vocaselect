

# Stage 1: Build Angular app
FROM node:18-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular app using Node.js HTTP server
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist/frontend .

# Install http-server to serve the application
RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]

