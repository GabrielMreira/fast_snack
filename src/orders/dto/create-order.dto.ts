/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ProductOrder } from '../entities/products-order.entity';
import { Client } from 'src/clients/entities/client.entity';

export class CreateOrderDto{
    @IsNotEmpty()
    pedido_produto: ProductOrder;

    @IsNotEmpty()
    cliente: Client;
}