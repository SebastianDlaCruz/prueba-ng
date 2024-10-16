import { User } from "../../../core/models/user";
import { Auth } from "../model/auth";

/**
 *  selecciona al usuario si sus name y password son igual , si no devuelve null
 * @param value
 * @param users
 * @returns
 */

export const findUser = (value: Auth, users: User[]): User | null => {
  const user = users.find(user => user.username === value.username && value.password === user.password);
  return user || null;
}
