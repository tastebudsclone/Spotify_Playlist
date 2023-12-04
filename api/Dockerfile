
FROM node:latest
LABEL author=anna
EXPOSE 3001
COPY . /api/
WORKDIR /api
RUN npm install
ENTRYPOINT ["npm", "start"]