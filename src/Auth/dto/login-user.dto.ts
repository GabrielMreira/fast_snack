/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDTO {
  @IsString()  
  @IsNotEmpty({message: 'Campo de login invalido'})
  login: string;

  @IsString()  
  @IsNotEmpty({message: 'Campo de senha invalido'})
  senha: string;
}
