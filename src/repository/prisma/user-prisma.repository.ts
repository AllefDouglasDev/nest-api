import { Injectable } from '@nestjs/common';
import { UserRepository } from '../interfaces/user.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  findByUsername(username: string) {
    return this.prisma.users.findUnique({ where: { username } });
  }

  findById(id: string) {
    return this.prisma.users.findUnique({ where: { id } });
  }
}
