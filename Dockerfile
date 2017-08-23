FROM node:8.4-alpine

# from this folder you can externaly grub code coverage report
VOLUME /usr/src/app/coverage

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/


# install all dependencies (with dev)
RUN npm i -s

# copy application code into container
COPY . /usr/src/app

RUN npm run -s build && npm run -s cover

# clear node_modules folder, because we don't need devDependencies on production
# and install only prod dependencies
# clear npm cache
RUN rm -rf node_modules/* src && npm i -s --production && rm -rf ~/.npm

EXPOSE 3000

ENV NODE_ENV=production \
    LOGGER_LEVEL=info \
    HTTP_PORT=3000

CMD [ "npm", "start" ]
