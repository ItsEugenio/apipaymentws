FROM node:18.16.0

WORKDIR /app

COPY ./apipay ./

RUN npm install

EXPOSE 80:3000

CMD ["npm", "start"]