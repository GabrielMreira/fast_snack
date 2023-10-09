/* eslint-disable prettier/prettier */
import { 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column,
    Generated,
    Entity,
    Unique
} from 'typeorm';

@Entity()
@Unique(['id', 'codigo'])
export class Client extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({ nullable: false, type: 'bigint' })
    @Generated()
    codigo: number;

    @Column({ nullable: false, type: 'varchar' })
    nome: string;

    @Column({ nullable: true, type: 'varchar' })
    cpf: string;

    @Column({ nullable: true, type: 'varchar' })
    telefone: string;
}