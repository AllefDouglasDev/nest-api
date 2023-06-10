import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { ProfileService } from './profile/profile.service';
import { SignInInputDto, SignInOutputDto } from './sign-in/sign-in.dto';
import { SignInService } from './sign-in/sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(
    private profileService: ProfileService,
    private signinInService: SignInService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@UserId() id: string) {
    console.log({ id });
    return this.profileService.execute({ id });
  }

  @Post('sign-in')
  signIn(@Body() input: SignInInputDto): Promise<SignInOutputDto> {
    return this.signinInService.execute(input);
  }
}
