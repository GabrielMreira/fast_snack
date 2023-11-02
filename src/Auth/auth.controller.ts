/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ForbiddenException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    sigIn(createUserDTO: CreateUserDTO){}    

    logIn(loginUserDTO: LoginUserDTO){}

    updateUser(updateUserDTO: UpdateUserDTO){}
}
