# express-ts-template

[![Release](https://github.com/adityataps/express-ts-template/actions/workflows/release.yaml/badge.svg)](https://github.com/adityataps/express-ts-template/actions/workflows/release.yaml)

This repository contains a template for building a robust Express API using TypeScript. It provides a solid foundation for developing scalable and maintainable backend applications.

## Purpose

The purpose of this template is to streamline the process of setting up an Express API with TypeScript. It includes a pre-configured environment with best practices and essential tools, allowing developers (like myself) to focus on building their application logic rather than spending time on initial setup and configuration.

## Features

- **TypeScript Support**: Leverage the power of TypeScript for enhanced code quality and developer productivity.
- **Express Framework**: Utilize the popular Express.js framework for building efficient and scalable web applications.
- **Environment Configuration**: Includes dotenv for easy management of environment variables.
- **Linting**: Integrated ESLint with TypeScript support for consistent code style and early error detection.
- **Formatting**: Prettier configuration for automatic code formatting.
- **Testing**: Jest setup for unit and integration testing.
- **Error Handling**: Centralized error handling middleware for consistent error responses.
- **Logging**: Morgan logger integration for comprehensive application logging.
- **Security**: Basic security measures including Helmet middleware for setting various HTTP headers.
- **Docker Support**: Dockerfile and docker-compose setup for deployment containerization.

## Getting Started

To use this template, fork the repository and clone it to your local machine.

```zsh
# clone the repo with a depth of 1 to save bandwidth
git clone https://github.com/<your-username>/express-ts-template.git

# rename and cd into the api template directory
mv express-ts-template api 
cd api

# add remote upstream as original repo
git remote add upstream https://github.com/adityataps/express-ts-template.git

# install dependencies
npm install -g pnpm
pnpm install

# run the app
pnpm dev # or pnpm start
```

To fetch/merge/rebase upstream changes:

```zsh
git fetch upstream

# merge upstream changes into your branch
git merge upstream/release 
# or rebase your branch onto upstream/release
git rebase upstream/release
```

## Todo

- [ ] Integrate with Swagger/OpenAPI for API documentation.
- [ ] Add database integration (e.g., with TypeORM or Mongoose).
- [ ] Add CI/CD pipeline (e.g., with GitHub Actions).
