FROM node:alpine as build

WORKDIR /app 
 
COPY ./dev/package*.json ./
 
RUN npm install --frozen-lockfile
RUN npm install -g typescript vite

COPY ./dev .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY ./dev/package*.json ./

RUN npm install --frozen-lockfile --production

COPY --from=build /app/dist ./dist

CMD ["sh", "-c", "npm run serve"]