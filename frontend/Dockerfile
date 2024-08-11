FROM node:18-alpine
WORKDIR /usr/src/frontend
COPY package*.json .
RUN npm i -g serve
COPY . .
RUN npm install
EXPOSE 5173
CMD ["serve", "-s", "dist"]