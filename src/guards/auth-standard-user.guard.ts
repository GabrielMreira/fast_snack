/* eslint-disable prettier/prettier */
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '../interfaces/Auth-Guard.interface';
import { JwtService } from '@nestjs/jwt';
import { JwtSecret } from 'src/consts/consts';
import { UserRole } from '../enums/user-role.enum';

export class AuthStandardUserGuard implements AuthGuard {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        if(!request.headers.authorization)
            throw new UnauthorizedException('Token não recibido');

        const token = request.headers.authorization;

        try {
            const payload = this.jwtService.verifyAsync(token, { secret: JwtSecret.SECRET + UserRole.USUARIO });
        } catch (error) {
            throw new UnauthorizedException('Token Inválido');
        }

        return true
    }

    extractToken(authorization: string): string | undefined {
        const [type, token] = authorization.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}