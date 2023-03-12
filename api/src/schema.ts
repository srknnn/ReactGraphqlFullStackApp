import { buildSchema } from "type-graphql";
import { TodoResolver } from "./resolvers/TodoResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { authChecker } from "./authChecker";

export async function createSchema() {
  return await buildSchema({
    resolvers: [TodoResolver, UserResolver],
    validate: false,
    authChecker: authChecker,
  });
}
