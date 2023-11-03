/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { LoginUserDTO } from './login-user.dto';
import { IsString } from 'class-validator';

export class ReturnUserDTO extends PartialType(LoginUserDTO) {
  @IsString()
  token?: string;
}
