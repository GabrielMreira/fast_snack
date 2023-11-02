/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Insira o nome do usuário' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Insira um login valido' })
  @MaxLength(50)
  login: string;

  @IsString()
  @MaxLength(50)
  senha: string;

  @IsString()
  cargo: string;
}
