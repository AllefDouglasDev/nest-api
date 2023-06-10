import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RepositoryModule } from './repository/repository.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RepositoryModule,
    CommonModule,
    AuthModule,
  ],
})
export class AppModule {}
