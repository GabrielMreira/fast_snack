/* eslint-disable prettier/prettier */
import { 
    BaseEntity, 
    Column,
    Generated, 
    PrimaryGeneratedColumn, 
    Entity,
    Unique,
    OneToMany,
    JoinTable
} from 'typeorm';
import { ProductOrder } from './products-order.entity';

@Entity()
@Unique(['id', 'codigo'])
export class Orders extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false, type: 'bigint'})
    @Generated()
    codigo: number;

    @OneToMany(() => ProductOrder, (productOrder) => productOrder.pedido)
    @JoinTable()
    pedido_produto

}
