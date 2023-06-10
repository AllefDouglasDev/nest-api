export type FieldError = {
  name: string;
  message: string;
};

export type AppError = {
  type: 'danger' | 'warning';
  message: string;
};

export type DeactivatedError = {
  name: string;
  message: string;
};

export interface DisplayError {
  fields?: FieldError[];
  app?: AppError[];
  deactivated?: DeactivatedError;
}
