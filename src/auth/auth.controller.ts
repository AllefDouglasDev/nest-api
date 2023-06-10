import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile/profile.service';
import { SignInInputDto, SignInOutputDto } from './sign-in/sign-in.dto';
import { SignInService } from './sign-in/sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(
    private profileService: ProfileService,
    private signinInService: SignInService,
  ) {}

  @Get('profile')
  profile(@Param('id') id: string) {
    return this.profileService.execute({ id });
  }

  @Post('sign-in')
  signIn(@Body() input: SignInInputDto): Promise<SignInOutputDto> {
    return this.signinInService.execute(input);
  }
}
