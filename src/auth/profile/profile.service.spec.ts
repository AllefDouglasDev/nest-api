import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundError } from 'src/common/exceptions/not-found.exception';
import { InMemoryUserRepository } from 'src/repository/mocks/in-memory-user.respository';
import { UserRepository } from 'src/repository/user.repository';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let profileService: ProfileService;
  let userRepository: InMemoryUserRepository;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: UserRepository,
          useValue: userRepository,
        },
      ],
    }).compile();
    profileService = module.get<ProfileService>(ProfileService);
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
