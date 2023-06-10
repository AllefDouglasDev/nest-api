import { IsNotEmpty, IsString } from 'class-validator';

export class SignInInputDto {
  @IsString({ message: 'Nome do usuário é obrigatório' })
  @IsNotEmpty({ message: 'Nome do usuário é obrigatório' })
  username: string;

  @IsString({ message: 'Nome do usuário é obrigatório' })
  @IsNotEmpty({ message: 'Nome do usuário é obrigatório' })
  password: string;
}

export class SignInOutputDto {
  token: string;
  userId: string;
}
