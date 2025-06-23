<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# Boiler Plate Nest Repo

This repo contains the structure for a NestJS you would like to begin from skratch. It contains:

- Environment Handling
- Autentication Module with register/login route
- User Module with user entity ready to be used (can add fields if require)
- Docker compose file with a PostgreSQL ready to go
- OpenAPI Documentation

## Installation

First, you need to install all the required npm dependencies
```
$ npm install
```

Then, you should ensure environment variables are available (via a .env file or by adding them in your docker-compose.yml file).
The expected environments variable are:

```
  NODE_ENV: string
  DATABASE_URL: string
  APP_PORT: number
  API_DOC: 'TRUE' | 'FALSE'
  POSTGRES_HOST: string
  POSTGRES_PORT: number
  POSTGRES_USER: string
  POSTGRES_PASSWORD: string
  POSTGRES_DB: string
  JWT_SECRET: string
```

## Running the application

To run directly your application, use:

```
# development
$ npm run start

# watch mode
$ npm run start:dev
```
You an also run the docker compose command to launch both the server and the database
```
$ docker compose up --build
```


## OpenAPI Documentation

Once the server is up and running, you can access the OpenAPI documentation by going on the route
```
$ /api
```

## Stay in Touch
- Author: Valentin SOYER
- LinkedIn: https://www.linkedin.com/in/valentin-soyer/
