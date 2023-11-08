/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtSecret } from 'src/consts/consts';
import { UserRole } from 'src/enums/user-role.enum';
import { AuthGuard } from 'src/interfaces/Auth-Guard.interface';

@Injectable()
export class AuthADMGuard implements AuthGuard {
    constructor(private readonly jwtService: JwtService){}

    async canActivate(
        context: ExecutionContext
    ):  Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if(!request.headers.authorization)
            throw new UnauthorizedException('Token não enviado');

        const token = this.extractToken(request.headers.authorization);
        try {
            const payload = await this.jwtService.verifyAsync(token, { secret: JwtSecret.SECRET + UserRole.ADMINISTRADOR })
        } catch (error) {
            throw new UnauthorizedException('Token não verificado')   
        }

        return true;
  }

  extractToken(authorization: string): string | undefined{
    const [type, token] = authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}