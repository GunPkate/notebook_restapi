FROM  node:16.3.0-alpine  as build 
WORKDIR /home/app
COPY package.json .
RUN npm install
COPY . .

FROM  node:16.3.0-alpine
WORKDIR /src
RUN npm install pm2 -g
COPY --from=build /home/app .
EXPOSE ${PORT}
CMD ["pm2-runtime","app.js"]


