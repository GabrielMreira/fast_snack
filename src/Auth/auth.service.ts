/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { ForbiddenException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './dto/login-user.dto';

@Injectable()
export class AuthService{
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>){}

    async sigIn(createUserDTO: CreateUserDTO){
        const client = await this.findOneByLogIn(createUserDTO.login);
        const senha = createUserDTO.senha;
        const user = createUserDTO;

        if(client)
            throw new ForbiddenException('Cliente com login indisponivel');

        delete(user.senha);
        user.senha = await bcrypt.hash(senha, 10);

        return this.userRepository.save(user);
    }

    async logIn(loginUserDTO: LoginUserDTO){
        const user = await this.findOneByLogIn(loginUserDTO.login);

        if(!user)
            throw new NotFoundException('Usuário não cadastrado');

        if(!await bcrypt.compare(loginUserDTO.senha, user.senha))
            throw new UnauthorizedException('Login ou senha incorretos');
        
        delete(user.senha);
        return user;
    }
    
    findOneByLogIn(logIn: string){
        return this.userRepository.findOneBy({login: logIn})
    }
}