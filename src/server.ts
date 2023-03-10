import "reflect-metadata";
import express from "express";
import { ApolloServer, Config, ExpressContext } from "apollo-server-express";
import { DataSource } from "typeorm";
import { createSchema } from "./schema";
import { authChecker } from "./authChecker";

const PORT = 4000;

(async () => {
  const app = express();

  //   await createConnection();
  const MyDataSource = new DataSource(require("../ormconfig.json"));

  // load entities, establish db connection, sync schema, etc.
  await MyDataSource.connect();

  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    introspection: true,
    playground: true,
    authChecker,
  } as Config<ExpressContext>);

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/graphql`);
  });
})();
