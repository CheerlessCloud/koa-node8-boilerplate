# Boilerplate for NodeJS 10 with Babel, Jest and Docker

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![codestyle](https://img.shields.io/badge/codestyle-airbnb-brightgreen.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Coverage Status](https://img.shields.io/coveralls/CheerlessCloud/koa-node8-boilerplate.svg?style=flat-square)]()
[![dependencies Status](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate/status.svg?style=flat-square)](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate)
[![devDependencies Status](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/CheerlessCloud/koa-node8-boilerplate?type=dev)

[![node](https://img.shields.io/badge/node-10.x-brightgreen.svg?style=flat-square)]()
[![npm](https://img.shields.io/badge/npm-6.x-blue.svg?style=flat-square)]()

Boilerplate for NodeJS HTTP RESTful API based on Koa.

Out of box support:

- [**Koa**](http://koajs.com/) with [**koa-bodyparser**](https://github.com/koajs/bodyparser) and [**koa-router**](https://github.com/alexmingoia/koa-router)
- [**ESlint**](https://github.com/eslint/eslint) with [**Airbnb styleguide**](https://github.com/airbnb/javascript) for linting
- [**Prettier**](https://prettier.io/) for formatting code
- [**Lint-staged**](https://github.com/okonet/lint-staged) for run linting on staged files before commit
- [**Babel v6**](https://github.com/babel/babel) with [**preset-env**](https://github.com/babel/babel-preset-env) for transpiling your code
- [**Nodemon**](https://github.com/remy/nodemon) for autorestart app in development mode (but of course better way is TDD)
- [**Jest**](https://github.com/facebook/jest) and [**supertest**](https://github.com/visionmedia/supertest) for testing
- [**Docker**](https://www.docker.com/) (_Dockerfile_, _docker-compose_)
- [**Coveralls**](https://coveralls.io/) reporing from CI
- [**Husky**](https://github.com/typicode/husky) for run tests before commit
- Simple [**TravisCI**](https://travis-ci.org) config
- [**EditorConfig**](http://editorconfig.org/)
- [**Twconf**](https://github.com/CheerlessCloud/twconf) for managment app configuration
- JSON logging with [**Bunyan**](https://github.com/trentm/node-bunyan) (in dev environment use human-readable output format)
- [**Semantic-release**](https://github.com/semantic-release/semantic-release) for automate publishing releases to npm (yes, it looks like an extra functionality for the http server, but you can easily remove it)
- [**Cross-env**](https://github.com/kentcdodds/cross-env) for sets and use environment variables across platforms
