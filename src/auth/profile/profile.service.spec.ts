import { NotFoundError } from 'src/common/exceptions/not-found.exception';
import { UserRepositoryInMemory } from 'src/repository/mocks/in-memory-user.respository';
import { UserRepository } from 'src/repository/user.repository';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let profileService: ProfileService;
  let userRepository: UserRepositoryInMemory;

  beforeEach(async () => {
    userRepository = new UserRepositoryInMemory();
    profileService = new ProfileService(
      userRepository as unknown as UserRepository,
    );
  });

  it('should return the user', async () => {
    const user = {
      id: '1',
      username: 'any',
      created_at: new Date(),
    };
    userRepository.users.push(user);

    const output = await profileService.execute({ id: '1' });

    expect(output.id).toBe(user.id);
    userRepository.users = [];
  });

  it('should throw error when user is not found', async () => {
    const promise = profileService.execute({ id: '1' });

    expect(promise).rejects.toThrow(new NotFoundError('User'));
  });
});
