FROM node:18.16.0

# Create and define the node_modules's cache directory.
WORKDIR /cache

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .