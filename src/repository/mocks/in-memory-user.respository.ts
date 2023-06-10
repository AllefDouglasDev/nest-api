import { User } from 'src/common/entities/user';
import { UserRepository } from '../interfaces/user.repository';

export class InMemoryUserRepository implements UserRepository {
  users: User[] = [];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
