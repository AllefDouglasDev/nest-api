import { Global, Module } from '@nestjs/common';
import { EncryptionService } from './encryption/encryption.service';
import { TokenService } from './token/token.service';

@Global()
@Module({
  providers: [EncryptionService, TokenService],
  exports: [EncryptionService, TokenService],
})
export class CommonModule {}
