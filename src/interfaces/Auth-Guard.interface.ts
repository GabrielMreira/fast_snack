import { CanActivate } from '@nestjs/common';

export interface AuthGuard extends CanActivate {
  extractToken(authorization: string): string | undefined;
}