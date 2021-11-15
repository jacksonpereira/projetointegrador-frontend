FROM node:alpine

WORKDIR /app

ADD ./package.json /app

RUN npm install

ADD ./ /app

CMD ["node", "index.js"]
