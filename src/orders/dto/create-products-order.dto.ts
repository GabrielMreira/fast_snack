/* eslint-disable prettier/prettier */
import { Product } from 'src/product/entities/product.entity';
import { Orders } from '../entities/orders.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateProductOrderDto {
    @IsNotEmpty()
    pedido: Orders;

    @IsNotEmpty()
    produto: Product[];
}
