/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";

export class CreateClientDto{
    @IsOptional()
    @IsString()
    nome:string;

    @IsOptional()
    @IsString()
    cpf:string;

    @IsOptional()
    @IsString()
    telefone:string;
}