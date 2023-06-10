import { Global, Module, Provider } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserPrismaRepository } from './prisma/user-prisma.repository';

const providers: Provider[] = [
  PrismaService,
  {
    provide: UserPrismaRepository,
    useClass: UserPrismaRepository,
  },
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class RepositoryModule {}
