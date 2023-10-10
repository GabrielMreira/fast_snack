import { Body, Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateProductOrderDto } from './dto/create-products-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post('pedidoproduto')
  createProductOrder(@Body() createProductOrderDto: CreateProductOrderDto) {
    this.ordersService.createProductOrder(createProductOrderDto);
  }
}
