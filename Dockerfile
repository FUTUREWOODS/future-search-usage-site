FROM node:20

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /usr/local/app

COPY package.json yarn.lock ./

RUN set -ex; \
    yarn install
