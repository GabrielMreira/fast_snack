/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>){}

    create(createClienteDto: CreateClientDto): Promise<Client>{
        return this.clientRepository.save(createClienteDto);
    }

    findall(): Promise<Client[]>{
        return this.clientRepository.find();
    }

    async findOne(id: number): Promise<Client>{
        return await this.clientRepository.findOneBy({ id })
    }

    async update(id: number, updateClienteDto: UpdateClientDto): Promise<Client>{
        const client = await this.clientRepository.findOneBy({ id });
        client.nome = updateClienteDto.nome;
        client.cpf = updateClienteDto.cpf;
        client.telefone = updateClienteDto.telefone;
        return await this.clientRepository.save(client);
    }

    async remove(id: number): Promise<Client>{
        const client = await this.clientRepository.findOneBy({ id });
        this.clientRepository.remove(client);
        return client;
    }
}
