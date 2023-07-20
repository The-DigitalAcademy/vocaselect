FROM node:18-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN apk add gettext

RUN npm run build --base-href

FROM nginx:latest

COPY --from=build /app/dist/frontend /usr/share/nginx/html

EXPOSE 4200