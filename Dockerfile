#
# NodeJs
#
FROM buildpack-deps:jessie

MAINTAINER Yolier Galan Tasse <gallegogt@gmail.com>

LABEL Version="1.0"

RUN apt-get update
RUN apt-get install -y nodejs-legacy npm
RUN apt-get clean

RUN npm install -g n
RUN n latest

WORKDIR /srv

COPY ./package.json app/
RUN cd app/ && npm install

COPY . app/

WORKDIR app
CMD ["npm", "start"]

EXPOSE 8888
