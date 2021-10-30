FROM node:16.10.0

WORKDIR /home/app
COPY . /home/app/
RUN npm run-script build

ENTRYPOINT nodejs ./dist/index.js