import { User } from 'src/common/entities/user';

export interface IUserRepository {
  findByUsername(username: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
