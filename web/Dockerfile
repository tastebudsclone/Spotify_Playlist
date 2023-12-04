FROM node:latest
LABEL author=anna
EXPOSE 3000
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT [ "npm", "start" ]
