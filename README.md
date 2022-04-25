PORT=3600

# database connection information
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=appstore_backend
POSTGRES_DB_TEST=store_backend_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# authentication
BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=ahmed-secret-token


# Storefront Backend Project



## Required Technologies
The application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Package installation
``
run -> npm install 
``
#### Dependencies
```sh
npm i express --- Node.js web app framework
npm i pg --- PostgreSQL client
npm i bcrypt --- Password hashing
npm i dotenv --- Load environment variables
npm i jsonwebtoken --- JSON web tokens
npm i cookie-parser
npm i cors
npm i db-migrate
npm i db-migrate-pg
```
#### Dev Dependencies
```sh
npm i --save-dev typescript --- typescript
npm i --save-dev eslint-plugin-prettier --- Run prettier as an eslint rule
npm i --save-dev ts-node --- Typescript node.js
npm i --save-dev supertest --- HTTP testing
npm i --save-dev jasmine --- Jasmine unit testing
npm i --save-dev prettier --- Code formatting
npm i --save-dev eslint-config-prettier --- Disable conflicting eslint rules
npm i --save-dev jasmine-spec-reporter ---  Jasmine test output formatting
npm i --save-dev nodemon --- Monitor files & auto restart node
# Types for typescript support
npm -i --save-dev @types/bcrypt
npm -i --save-dev @types/cookie-parser
npm -i --save-dev @types/cors
npm -i --save-dev @types/express
npm -i --save-dev @types/jsonwebtoken
npm -i --save-dev @types/supertest
npm -i --save-dev @typescript-eslint/eslint-plugin
npm -i --save-dev @types/jasmine
npm -i --save-dev @types/pg
npm -i --save-dev @typescript-eslint/parser
```


## Scripts Used
```sh
    "npm run dev": "to set NODE_ENV=dev and start dev mode with nodemon on port 3600",
    "npm run build": "to compar ts fils to js fils on dis root",
    "npm run start": "to compar ts files and run dev mode",
    "npm run format": "to use prettier to format the code",
    "npm run lint": "to use eslint to analyzes the code to quickly find problems",
    "npm run test":"set NODE_ENV=test&& db-migrate -e test up && npm run build && jasmine && db-migrate -e test reset",
    "npm run migrate-up": "to set NODE_ENV=dev&& create tables is database",
    "npm run migrate-down": "to set NODE_ENV=dev&& drop tables on database"
```


###  Plan to Meet Requirements (Endpoints & Database Schema)

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend.

###  Database Creation

```sh
# create user
CREATE USER postgres WITH PASSWORD 'postgres';
# create Database
CREATE DATABASE store_backend; CREATE DATABASE store_backend_test;
# conecct to database
\c appstore_backend;
```

### Database Migrations
```sh
# to create the same data schema run this command to create all tables 
"npm run migrate-up"
# to drop the data schema tables run this command to drop each table separately
"npm run migrate-down"
# to reset the data schema tables run this command
"npm run migrate-reset"
# Migrations used in this repo
db-migrate create users--sql-file
db-migrate create products --sql-file
db-migrate create orders --sql-file
db-migrate create order_products --sql-file
```

### Environmental Variables (.env file contents)
```sh
# to connect with the database use the following environmental variables
PORT=3600
NODE_ENV=dev

# database connection information
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=store_backend
POSTGRES_DB_TEST=store_backend_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# authentication
BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=ahmed-secret-token
```