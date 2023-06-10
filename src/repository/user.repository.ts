import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  findByUsername(username: string) {
    return this.prisma.users.findUnique({ where: { username } });
  }
}
