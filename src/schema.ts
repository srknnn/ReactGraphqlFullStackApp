import { buildSchema } from "type-graphql";
import { TodoResolver } from "./resolvers/TodoResolver";
import { UserResolver } from "./resolvers/UserResolver";

export async function createSchema() {
  return await buildSchema({
    resolvers: [TodoResolver, UserResolver],
    validate: false,
  });
}
