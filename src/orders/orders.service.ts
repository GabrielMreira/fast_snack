/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateProductOrderDto } from './dto/create-products-order.dto';
import { ProductOrder } from './entities/products-order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders) private readonly orderRepository: Repository<Orders>, 
        @InjectRepository(ProductOrder) private readonly productOrderRepository: Repository<ProductOrder>) {}

    create(createOrderDto: CreateOrderDto){
        return this.orderRepository.save(createOrderDto);
    }

    async createProductOrder(createProductOrderDto: CreateProductOrderDto){
        const order = await this.orderRepository.findOneBy({ id: createProductOrderDto.pedido.id })

        if(!order)
            throw new NotFoundException('Pedido não encontrado');

        createProductOrderDto.produto.forEach((produto) => {
            this.productOrderRepository.createQueryBuilder()
            .insert()
            .into(ProductOrder)
            .values({
                pedido: order,
                produto: produto
            })
            .execute();
        })
}
}
