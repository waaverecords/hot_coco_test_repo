FROM node:16.10.0

RUN npm run-script build

ENTRYPOINT nodejs ./dist/index.js