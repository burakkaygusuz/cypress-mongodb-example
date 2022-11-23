# Cypress MongoDb Example

[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&logoColor=33ff99&style=for-the-badge)](https://www.cypress.io) [![MongoDb](https://img.shields.io/npm/v/mongodb?color=13aa52&label=mongodb&logo=mongodb&logoColor=mongodb&style=for-the-badge)](https://github.com/mongodb/node-mongodb-native)

Testing MongoDb with Cypress.

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                               | Docker Compose                 |
| ------- | ---------------------------------- | ------------------------------ |
| Windows | `winget install OpenJS.NodeJS.LTS` | `scoop install docker-compose` |
| macOS   | `brew install node@18`             | `brew install docker-compose`  |

## Executing The Tests

- Clone the repository.

```shell
git clone git@github.com:burakkaygusuz/cypress-mongodb-example.git
```

- Change the directory.

```shell
cd cypress-mongodb-example
```

- Execute the .yml file to starting the MongoDb.

```shell
docker-compose -f docker-compose.yml up
```

- Run the test.

```shell
yarn install && yarn run test
```
