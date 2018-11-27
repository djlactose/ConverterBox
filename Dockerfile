FROM node:alpine

EXPOSE 80

ADD main.js /mnt/main.js
ADD converter.js /mnt/converter.js

WORKDIR /mnt

RUN apk add ffmpeg

WORKDIR /mnt

#ENTRYPOINT node /mnt/main.js
