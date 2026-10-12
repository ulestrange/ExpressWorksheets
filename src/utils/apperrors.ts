
// NotFoundError          -> 404
// ValidationError        -> 400
// UnauthorizedError      -> 401
// ForbiddenError         -> 403
// UserAlreadyExistsError -> 409

export class AppError extends Error {

statusCode: number;

  constructor( message: string, statusCode: number
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

// export class UserAlreadyExistsError extends AppError {
//   constructor() {
//     super('User already exists', 409);
//   }
// }

export class UnauthorizedError extends AppError {
  constructor() {
    super('Invalid credentials', 401);
  }
}

  


export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, public details?: unknown) {
    super(message, 400);
  } 
}
