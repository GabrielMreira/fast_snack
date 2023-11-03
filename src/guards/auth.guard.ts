/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    console.log(request.headers.authorization);  
    //Finalizar o guard pra jwt
    return true;
  }

  extractToken(request): string | undefined{
    const [type, token] = request.headers.Authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}