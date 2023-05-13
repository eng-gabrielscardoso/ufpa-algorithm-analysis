FROM node:latest

WORKDIR /var/www/app

COPY . .

RUN npm install

VOLUME /var/www/app

ENTRYPOINT ["npm", "run"]

CMD [""]
