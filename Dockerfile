FROM node
WORKDIR package.json
COPY package.json .
RUN  npm install

COPY server.js .

EXPOSE 4040

CMD node server.js
