/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
import { ProductOrder } from '../entities/products-order.entity';
import { Client } from 'src/clients/entities/client.entity';

export class CreateOrderDto{
    @IsOptional()
    pedido_produto: ProductOrder;

    @IsNotEmpty()
    cliente: Client;
}