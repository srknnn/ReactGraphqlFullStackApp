import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Authorized,
  Int,
  ID,
} from "type-graphql";
import { Todo } from "../entities/Todo";

@Resolver()
export class TodoResolver {
  @Authorized()
  @Mutation(() => Todo)
  async createTodo(@Arg("title") title: string): Promise<Todo> {
    const todo = Todo.create({ title });
    await todo.save();
    return todo;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async markTodoCompleted(@Arg("id", () => ID!) id: number): Promise<boolean> {
    const todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
      return false;
    }
    todo.completed = true;
    await todo.save();
    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async markTodoUncompleted(
    @Arg("id", () => ID!) id: number
  ): Promise<boolean> {
    const todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
      return false;
    }
    todo.completed = false;
    await todo.save();
    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteTodo(@Arg("id", () => ID!) id: number): Promise<boolean> {
    const todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
      return false;
    }
    await todo.remove();
    return true;
  }

  @Authorized()
  @Query(() => [Todo])
  async listTodos(): Promise<Todo[]> {
    return await Todo.find();
  }
}
