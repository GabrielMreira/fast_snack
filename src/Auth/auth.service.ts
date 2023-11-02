/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/clients/client.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class AuthService{

    sigIn(createUserDTO: CreateUserDTO){
        //Implementar o medodo de login, adicionando o campo de senha na entidade cliente
    }
    
}