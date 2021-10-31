FROM node:16.10.0

WORKDIR /home/app

COPY . /home/app/
RUN npm install
RUN npm run-script build

EXPOSE 4000

ENTRYPOINT nodejs ./dist/index.js