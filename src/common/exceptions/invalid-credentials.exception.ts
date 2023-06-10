import { AppError, DisplayError } from './display-error';

export class InvalidCredentialsError extends Error implements DisplayError {
  statusCode: number;
  app: AppError[];

  constructor() {
    super('InvalidCredentialsError');
    this.name = 'InvalidCredentialsError';
    this.statusCode = 401;
    this.message = 'InvalidCredentials';
    this.app = [
      {
        type: 'danger',
        message: 'Invalid credentials',
      },
    ];
  }
}
