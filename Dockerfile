FROM node:10.12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# install production dependencies
RUN npm ci -q

# copy transpiled application code into container
COPY ./dist /usr/src/app/dist

EXPOSE 3000

ENV NODE_ENV=production \
  LOGGER_LEVEL=info \
  HTTP_PORT=3000

CMD ["npm", "start"]
