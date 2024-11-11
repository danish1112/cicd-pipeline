FROM node

WORKDIR /app

COPY package.*json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD [ "node", "app.js" ]