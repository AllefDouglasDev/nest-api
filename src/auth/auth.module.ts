import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SignInService } from './sign-in/sign-in.service';
import { ProfileService } from './profile/profile.service';

@Module({
  controllers: [AuthController],
  providers: [SignInService, ProfileService],
})
export class AuthModule {}
