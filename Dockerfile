FROM node
COPY /frontend/package.json .
RUN  npm install

COPY /backend/server.js .

EXPOSE 4040

CMD node server.js
