import { IsNotEmpty, IsString } from 'class-validator';

export class ProfileInputDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class ProfileOutputDto {
  id: string;
  username: string;
  createdAt: string;
  creator?: {
    id?: string;
    username?: string;
  };
}
