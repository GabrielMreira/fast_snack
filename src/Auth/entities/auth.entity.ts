/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 50, nullable: false})
    nome: string

    @Column({type: 'varchar', length: 50, nullable: false})
    login: string

    @Column({type: 'varchar', nullable: false})
    senha: string;

    @Column({type: 'varchar', nullable: false})
    cargo: string;
}
