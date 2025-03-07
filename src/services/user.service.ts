import { User } from "../models/user.model";

class UserService {
  private users: User[] = [{ id: 1, name: "Alice" }];

  getUsers(): User[] {
    return this.users;
  }

  createUser(name: string): User {
    const newUser: User = { id: this.users.length + 1, name };
    this.users.push(newUser);
    return newUser;
  }
}

export default new UserService();
