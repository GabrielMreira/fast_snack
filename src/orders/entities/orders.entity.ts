/* eslint-disable prettier/prettier */
import { 
    BaseEntity, 
    Column,
    Generated, 
    PrimaryGeneratedColumn, 
    Entity,
    Unique,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    ManyToOne
} from 'typeorm';
import { ProductOrder } from './products-order.entity';
import { Client } from 'src/clients/entities/client.entity';

@Entity()
@Unique(['id', 'codigo'])
export class Orders extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false, type: 'bigint'})
    @Generated()
    codigo: number;

    @OneToMany(() => ProductOrder, (productOrder) => productOrder.pedido)
    @JoinColumn()
    pedido_produto: ProductOrder

    @ManyToOne(() => Client, (client) => client.orders)
    @JoinColumn()
    cliente: Client

    @Column({nullable: true})
    processado: boolean

    @Column({type: 'double precision', nullable: true})
    total_pedido: number;

    @CreateDateColumn()
    pedido_criado: Date
}
