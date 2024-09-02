# REST API products admin

This project is an Express-based REST API for managing products, allowing for Create, Read, Update, and Delete (CRUD) operations. It is built using TypeScript and includes Swagger documentation for easy API exploration.

## Features

- CRUD Operations: Supports creation, retrieval, updating, and deletion of products.
- TypeScript: The project is written in TypeScript, ensuring type safety.
- Database Integration: Utilizes Sequelize for managing the PostgreSQL database.
- Swagger Documentation: Provides an interactive API documentation interface via Swagger.
- Testing: Includes Jest for unit and integration testing, ensuring code quality.
- Linting and Formatting: ESLint and Prettier are configured for maintaining code quality and consistency.

## Prerequisites

- Node.js (version 16 or above)
- PostgreSQL (configured and running)

## Installation

- Clone the repository
- npm install
- Create a .env file in the root directory with the necessary database configurations.

## Run the migrations to set up the database

- npx sequelize-cli db:migrate

## Running the Application

- npm run dev

## Deployed version 
- https://products-crud-backend-api.onrender.com/products
