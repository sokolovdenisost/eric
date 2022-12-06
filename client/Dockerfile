FROM node:16-alpine

WORKDIR /client

COPY ./package.json ./

RUN yarn cache clean & yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
