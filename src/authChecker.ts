import { AuthChecker } from "type-graphql";
import jwt from "jsonwebtoken";
import { SECRET } from "./constants";
import { User } from "./entities/User";

export const authChecker: AuthChecker<{ user?: User }> = async ({
  context,
}) => {
  //   const token = context.req.headers["authorization"];
  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     const decodedToken = jwt.verify(token, SECRET) as { userId: number };
  //     const user = await User.findOne({ where: { id: decodedToken.userId } });
  //     if (!user) {
  //       return false;
  //     }
  //     context.user = user;
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  return true;
};
