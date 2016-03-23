FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app/dist
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./dist /usr/src/app/dist
COPY ./server.js /usr/src/app/

EXPOSE 8080
CMD [ "npm", "start" ]
