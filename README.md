# Nginx-Nextjs-Test

This is a test project to investigate using Nginx as reverse proxy to achieve a setup with Next.js which supports multiple basePaths.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Running with proxy

To achieve multiple `basePath` while still using a single Next.js application there is a nginx reverse proxy included.

There are two ways of starting the application in development mode;
1. Start the Next.js app with `npm run dev` and start the local-proxy `docker compose up local-proxy`. This is done automatically with the command `make dev-local`
2. Start the Next.js app within a docker container with the `/src` folder mounted. This is done automatically with the command `make dev`

In both cases hot-reloading works as expected. And it is a matter of taste which approach to use.

To build the application and test it in "production mode", run `make start`. This will first build your application, before starting it and the proxy.


**Summary:**
```
make dev       # Next.js app is running on host-system
make dev-local # Next.js app is running within a container
make start     # Build and create docker images, and starts them
make stop      # Stops all containers within this project
```


