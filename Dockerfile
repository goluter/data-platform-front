FROM node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

COPY yarn.lock ./

ARG API_HOST 

ENV API_HOST=$API_HOST

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run generate

###

FROM nginx:1.18-alpine

ARG API_HOST 

ENV API_HOST=$API_HOST

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
