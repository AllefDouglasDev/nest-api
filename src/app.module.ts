import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RepositoryModule } from './repository/repository.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [RepositoryModule, CommonModule, AuthModule],
})
export class AppModule {}
