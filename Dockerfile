FROM node:8-alpine

# from this folder you can externaly grub code coverage report
VOLUME /usr/src/app/coverage

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm i
COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
