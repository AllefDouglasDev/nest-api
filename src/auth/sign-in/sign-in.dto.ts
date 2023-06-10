import { IsNotEmpty, IsString } from 'class-validator';

export class SignInInputDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignInOutputDto {
  token: string;
  userId: string;
}
