import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private config: ConfigService, private jwtService: JwtService) {}

  createToken(userId: string): Promise<string> {
    return this.jwtService.signAsync(
      { sub: userId },
      {
        expiresIn: '7d',
        secret: this.config.get('JWT_SECRET'),
      },
    );
  }
}
