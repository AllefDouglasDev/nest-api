import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  createToken(userId: string) {
    return userId;
  }
}
