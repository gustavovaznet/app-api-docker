# NODE IMAGE
FROM node:argon

# NODEMON
RUN npm install -g nodemon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# NODEJS AND NPM
COPY package.json /usr/src/app/
RUN npm install
COPY server.js /usr/src/app/

# PORT
EXPOSE 8080
CMD ["nodemon", "/usr/src/app/server.js"]
