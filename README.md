## Building NestJS worker/scheduler without starting the HTTP server

At its core, NestJS is a modularized framework that provides strong DI capabilities to the node/TS ecosystem.

A top-level module can be exposed in one of three ways:

• An HTTP server

• A microservice

• An application context eg. bootstrapped DI container

You can build a background worker without using HTTP features of Nest by creating your application as a microservice with a custom strategy

## Running the app

```bash
# install deps
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
