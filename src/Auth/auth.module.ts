/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/auth.entity';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtSecret } from 'src/consts/consts';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([Users]), JwtModule.register({
    global: true,
    secret: JwtSecret.SECRET,
    signOptions: { expiresIn: '1h' }
  })]
})
export class AuthModule {}
