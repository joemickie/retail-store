export interface JwtPayload {
    userId: string;
    username: string;
    email: string;
    roles: string[];
  }