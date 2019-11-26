FROM node:10

WORKDIR /usr/local/app

COPY package*.json ./
COPY yarn.lock yarn.lock

RUN set -ex; \
    yarn install
