import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/exceptions/not-found.exception';
import { UserPrismaRepository } from 'src/repository/prisma/user-prisma.repository';
import { ProfileInputDto, ProfileOutputDto } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private userRepository: UserPrismaRepository) {}

  async execute(input: ProfileInputDto): Promise<ProfileOutputDto> {
    const user = await this.userRepository.findById(input.id);
    if (!user) {
      throw new NotFoundError('User');
    }
    return {
      id: user.id,
      username: user.username,
      createdAt: user.created_at.toISOString(),
    };
  }
}
