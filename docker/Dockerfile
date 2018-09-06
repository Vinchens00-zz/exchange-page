FROM node:8.10

WORKDIR /app
EXPOSE 80

ADD public public

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install

ADD src src