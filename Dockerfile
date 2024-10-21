FROM node:23-alpine
WORKDIR /opt

EXPOSE 8080

ENV PORT=8080

RUN apk add --no-cache git

COPY . .

RUN yarn install --non-interactive --frozen-lockfile

ENV NODE_ENV=production
RUN yarn run build
CMD ["yarn", "run", "start"]
