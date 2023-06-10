import { Body, Controller, Post } from '@nestjs/common';
import { SignInInputDto, SignInOutputDto } from './sign-in/sign-in.dto';
import { SignInService } from './sign-in/sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(private signinInService: SignInService) {}

  @Post('sign-in')
  signIn(@Body() input: SignInInputDto): Promise<SignInOutputDto> {
    return this.signinInService.execute(input);
  }
}
