FROM node:latest

MAINTAINER Adrián García Espinosa "age.apps.dev@gmail.com"

# Create app directory
RUN mkdir /server

WORKDIR /server

ADD package.json /server/package.json
RUN npm install

ADD . /server


EXPOSE 8000

CMD npm start
