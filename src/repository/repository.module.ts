import { Global, Module, Provider } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './user.repository';

const providers: Provider[] = [
  PrismaService,
  {
    provide: UserRepository,
    useClass: UserRepository,
  },
];

@Global()
@Module({
  providers,
  exports: providers,
})
export class RepositoryModule {}
