# notebook_restapi

```
docker build -t imgnotebook .
docker run -it -d -p 3000:3000 -e PORT=3000 -e MONGO_URI=mongodb://host.docker.internal:27017/ -e MONGO_USER=mongoadmin -e MONGO_PASS=secret -e DBMONGO=start  --name notebookapi  imgnotebook
```

### differnet namespace and docker network not localhost => host.docker.internal instead

### local : container

### 3000 : 3000

```
FROM  node:16.3.0-alpine  as build
WORKDIR /home/app
COPY package.json .
RUN npm install
COPY . .
CMD ["node","app.js"]
EXPOSE ${PORT}
```

```
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
```

## Docker compose

```run
docker compose up -d
docker compose up -d mongo
docker compose up -d --build
```

### -d return terminal

## Docker compose stop

```down
docker compose down
```

# 1. Run mongo docker compose

```
docker compose up -d mongo
node app.js
```

# 2. Run mongo in localhost check .env file

```
docker compose up -d mongo
docker build -t imgnotebook .
docker run -it -d -p 3000:3000 -e PORT=3000 -e MONGO_URI=mongodb://host.docker.internal:27017/ -e MONGO_USER=mongoadmin -e MONGO_PASS=secret -e DBMONGO=start  --name notebookapi  imgnotebook
```

# 3. Run mongo in compose file (most simple)

```
docker compose up -d
```

# clean project

```
docker compose down
```
