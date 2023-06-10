import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserId } from 'src/common/decorators/user-id.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ProfileService } from './profile/profile.service';
import { SignInInputDto, SignInOutputDto } from './sign-in/sign-in.dto';
import { SignInService } from './sign-in/sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(
    private profileService: ProfileService,
    private signinInService: SignInService,
  ) {}

  @UseGuards(JwtGuard)
  @Get('profile')
  profile(@UserId() id: string) {
    return this.profileService.execute({ id });
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.CREATED)
  signIn(@Body() input: SignInInputDto): Promise<SignInOutputDto> {
    return this.signinInService.execute(input);
  }
}
