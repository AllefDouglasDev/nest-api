import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
  encrypt(plainText: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.hash(plainText, saltRounds, function (err, hash) {
        if (err) {
          return reject(err);
        }
        return resolve(hash);
      });
    });
  }

  compare(plainText: string, hash: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainText, hash, function (err, result) {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }
}
