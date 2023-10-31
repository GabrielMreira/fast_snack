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
        const products = createProductOrderDto.produto;

        if(!order)
            throw new NotFoundException('Pedido não encontrado');

        if(!products)
            throw new NotFoundException('Produtos não encontrados')

        products.forEach((produto) => {
            this.productOrderRepository.createQueryBuilder()
            .insert()
            .into(ProductOrder)
            .values({
                pedido: order,
                produto: produto
            })
            .execute();
        })

        const valortotal = products.map((product) => product.preco).reduce((accumulator, current) => {return accumulator + current});

        this.orderRepository
        .createQueryBuilder()
        .update(Orders)
        .set({total_pedido: valortotal})
        .where('id = :id', { id:order.id })
        .execute();
    }

    findAll() {
        return this.orderRepository.createQueryBuilder('orders')
        .innerJoinAndSelect('orders.cliente', 'client')
        .orderBy('orders.pedido_criado')
        .getMany();
    }

    async processOrder(id: number ,pedidoAceito: boolean){
        const order: Orders = await this.orderRepository.findOneBy({id});
        if(!order){
            throw new NotFoundException('Nenhum pedido encontrado')
        }
 
        const processado = (pedidoAceito as unknown as string) == 'true'  ? true : false;
        
        this.orderRepository
        .createQueryBuilder()
        .update(Orders)
        .set({ processado })
        .where('id = :id', { id })
        .execute();
    }

    findById(id: number){
        return this.orderRepository.createQueryBuilder('orders')
        .innerJoinAndSelect('orders.cliente', 'client')
        .where('orders.id = :id', { id })
        .getOne();
    }

    findProductsByOrder(id: number) {
        const productOrder = this.productOrderRepository
        .createQueryBuilder('ProductOrder')
        .leftJoinAndSelect('ProductOrder.produto', 'Product')
        .where('ProductOrder.pedido.id = :id', { id })
        .getMany();

        if(!productOrder)
            throw new NotFoundException('Nenhum produdo nesse pedido');

        return productOrder;
    }
}
