FROM node:10

WORKDIR /usr/local/app

COPY package.json package.json

RUN set -ex; \
    yarn install

# ENTRYPOINT [ "/bin/bash" ]
# CMD "-c \"if [ ! -d \"node_modules\" ]; then yarn; fi; yarn dev\""