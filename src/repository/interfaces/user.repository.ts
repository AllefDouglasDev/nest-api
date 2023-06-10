import { User } from 'src/common/entities/user';

export interface UserRepository {
  findByUsername(username: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
