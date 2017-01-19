FROM node:latest

MAINTAINER Adrián García Espinosa "age.apps.dev@gmail.com"

# Create app directory
RUN mkdir /server

# VOLUME ./app:/server
WORKDIR /server

ADD . /server
RUN npm install

EXPOSE 8080

CMD npm start
