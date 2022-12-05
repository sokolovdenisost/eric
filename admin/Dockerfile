FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn cache clean & yarn

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
