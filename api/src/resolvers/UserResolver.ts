import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../constants";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async signUp(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({ name, email, password: hashedPassword });
    await user.save();
    return user;
  }

  @Mutation(() => String)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<string> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("Invalid login credentials");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid login credentials");
    }
    const token = jwt.sign({ userId: user.id }, SECRET);
    console.log("token", token);
    return token;
  }
}
