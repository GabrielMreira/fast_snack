/* eslint-disable prettier/prettier */
import { Orders } from 'src/orders/entities/orders.entity';
import { 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column,
    Generated,
    Entity,
    Unique,
    OneToMany,
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

    @OneToMany(() => Orders, (orders) => orders.cliente)
    orders: Orders
}