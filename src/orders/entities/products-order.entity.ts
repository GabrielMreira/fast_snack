/* eslint-disable prettier/prettier */
import { 
    BaseEntity, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    Unique
} from 'typeorm';
import { Orders } from './orders.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
@Unique(['id'])
export class ProductOrder extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Orders, (orders) => orders.pedido_produto)
    @JoinColumn()
    pedido: Orders;

    @ManyToOne(() => Product, (product) => product.pedido_produto)
    @JoinColumn()
    produto: Product;
    
}