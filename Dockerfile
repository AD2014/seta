FROM node:6.10

RUN mkdir -p /usr/local/seta

WORKDIR /usr/local/seta

# Install app dependencies
COPY package.json /usr/local/seta
RUN npm install

# Bundle app source
COPY . /usr/local/seta

EXPOSE 9000

CMD [ "npm", "start" ]
