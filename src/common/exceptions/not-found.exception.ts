export class NotFoundError extends Error {
  statusCode: number;

  constructor(model: string) {
    super('NotFoundError');
    this.name = 'NotFoundError';
    this.statusCode = 404;
    this.message = `${model} not found`;
  }
}
