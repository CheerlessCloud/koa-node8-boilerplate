FROM node:8.8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# from this folder you can externaly grub code coverage report
VOLUME /usr/src/app/coverage

COPY package*.json /usr/src/app/

# install all dependencies (with devDeps)
RUN npm i -s

# copy application code into container
COPY . /usr/src/app

RUN npm run -s build && npm run -s test:cover

# remove non-production dependencies and clear npm cache
RUN npm prune --production && rm -rf ~/.npm

EXPOSE 3000

ENV NODE_ENV=production \
    LOGGER_LEVEL=info \
    HTTP_PORT=3000

CMD [ "npm", "start" ]
