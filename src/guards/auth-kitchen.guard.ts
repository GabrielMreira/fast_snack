/* eslint-disable prettier/prettier */
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '../interfaces/Auth-Guard.interface';
import { JwtService } from '@nestjs/jwt';
import { JwtSecret } from 'src/consts/consts';
import { UserRole } from '../enums/user-role.enum';

@Injectable()
export class AuthKitchenGuard implements AuthGuard {
    constructor(private readonly jwtService : JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization)
            throw new UnauthorizedException('Não enviado');

        const token = this.extractToken(request.headers.authorization);

        try {
            const payload = this.jwtService.verifyAsync(token, { secret: JwtSecret.SECRET +  UserRole.COZINHA})
        } catch (error) {
            throw new UnauthorizedException('Token invalido');
        }

        return true;
    }

    extractToken(authorization: string): string | undefined {
        const [type, token] = authorization.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
