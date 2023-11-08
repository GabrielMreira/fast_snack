/* eslint-disable prettier/prettier */
import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '../interfaces/Auth-Guard.interface';


export class AuthStandardUserGuard implements AuthGuard {
    async canActive(context: ExecutionContext): Promise<boolean>{
        
    }

    extractToken(authorization: string): string | undefined {}
}