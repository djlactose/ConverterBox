FROM node:11-alpine

ADD upload.js /mnt/upload.js

WORKDIR /mnt

RUN apk add ffmpeg && \
npm install fs && \
npm install formidable && \
mkdir /mnt/in && \
mkdir /mnt/out

#ENTRYPOINT node /mnt/upload.js
