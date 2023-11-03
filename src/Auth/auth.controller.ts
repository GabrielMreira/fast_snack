/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('sigin')
    sigIn(@Body() createUserDTO: CreateUserDTO){
        this.authService.sigIn(createUserDTO);
    }    

    @UseGuards(AuthGuard)
    @Get('login')
    logIn(@Body() loginUserDTO: LoginUserDTO){
        return this.authService.logIn(loginUserDTO);
    }

    updateUser(updateUserDTO: UpdateUserDTO){}
}
