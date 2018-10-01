FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# TODO – CHECK 8081
# EXPOSE 8081
# EXPOSE 8082
CMD [ "npm", "start" ]
