import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SignInService } from './sign-in/sign-in.service';

@Module({
  controllers: [AuthController],
  providers: [SignInService],
})
export class AuthModule {}
