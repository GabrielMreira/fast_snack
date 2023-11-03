/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { ForbiddenException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './dto/login-user.dto';
import { ReturnUserDTO } from './dto/return-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService){}

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
            throw new UnauthorizedException('Senha incorretos');
        
        delete(user.senha);
        delete(user.id);

        const returnUser: ReturnUserDTO = user;
        const payload = {username: user.nome , userrole: user.cargo};
        returnUser.token = await this.jwtService.signAsync(payload);

        return returnUser;
    }
    
    findOneByLogIn(logIn: string){
        return this.userRepository.findOneBy({login: logIn})
    }
}