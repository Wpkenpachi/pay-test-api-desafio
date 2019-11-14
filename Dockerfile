FROM node:10

WORKDIR /

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4040
CMD [ "node", "src/app.js" ]