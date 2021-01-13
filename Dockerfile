FROM node:14-alpine
WORKDIR /opt

EXPOSE 8080
ENV PORT=8080

RUN apk add --no-cache git

COPY . .

RUN yarn --non-interactive --frozen-lockfile
RUN yarn run build
CMD ["yarn run start"]
