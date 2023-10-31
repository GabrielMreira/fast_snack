/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/clients/client.service';

@Injectable()
export class AuthService{

    sigIn(clientName: string){
        //Implementar o medodo de login, adicionando o campo de senha na entidade cliente
    }
    
}