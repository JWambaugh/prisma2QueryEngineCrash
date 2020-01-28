# prisma2QueryEngineCrash

This reproduces the query engine crash described in https://github.com/prisma/prisma-client-js/issues/435.

## Setup

1. create a `prismaTest` database in mysql
1. run `mysql prismaTest < createSchema.sql` to import test schema and data
1. set up `prismaTest` user with `prismaTest` password and grant access to `prismaTest` database
1. `npm install`
1. `npx prisma2 generate`
1. `node index.js` to run the test that reproduces the error
