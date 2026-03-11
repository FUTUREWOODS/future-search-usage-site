FROM node:20

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /usr/local/app

COPY package.json yarn.lock ./

RUN set -ex; \
    yarn install

# ENTRYPOINT [ "/bin/bash" ]
# CMD "-c \"if [ ! -d \"node_modules\" ]; then yarn; fi; yarn dev\""