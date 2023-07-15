FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY next.config.js ./
COPY public ./public
COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

#ENTRYPOINT ["npm", "start"]
ENTRYPOINT ["node", "server.js"]