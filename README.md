# prisma2QueryEngineCrash

This reproduces the query engine crash described in https://github.com/prisma/prisma-client-js/issues/435.

## Setup

1. create a `prismaTest` database in mysql
1. run `mysql prismaTest < createSchema.sql` to import test schema and data
1. set up `prismaTest` user with `prismaTest` password and grant access to `prismaTest` database
1. `npm install`
1. `npx prisma2 generate`
1. `node index.js` to run the test that reproduces the error


# The Test
The test should output `{"id":1,"name":"joe smith"}` twice, with an error thrown between them, but because the query engine crashes, the second query also fails.
## Output of test
```
{"id":1,"name":"joe smith"}
Error: 
Invalid `prisma.select.author()` invocation in
/opt/korihor/server/prismaTest/index.js:11:8



Engine exited {"target":"exit","timestamp":"2020-01-28T21:49:32.221Z","level":"error","fields":{"message":"255"}}
    at PrismaClientFetcher.request (/opt/korihor/server/prismaTest/node_modules/@prisma/client/index.js:62:23)
    at processTicksAndRejections (internal/process/task_queues.js:94:5)
Error: 
Invalid `prisma.select.author()` invocation in
/opt/korihor/server/prismaTest/index.js:11:8



Engine exited {"target":"exit","timestamp":"2020-01-28T21:49:32.221Z","level":"error","fields":{"message":"255"}}
    at PrismaClientFetcher.request (/opt/korihor/server/prismaTest/node_modules/@prisma/client/index.js:62:23)
    at processTicksAndRejections (internal/process/task_queues.js:94:5)
```
## Expected output:
```
{"id":1,"name":"joe smith"}
(some error saying there's no author record for annotation with id of 1
{"id":1,"name":"joe smith"}
```
