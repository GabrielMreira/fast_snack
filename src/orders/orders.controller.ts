import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
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

  @Get('cozinha')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('cozinha/:id')
  findById(@Param('id') id: string) {
    return this.ordersService.findById(+id);
  }

  @Patch('cozinha/:id/aceitarpedido?')
  updateOrder(@Param('id') id: string, @Query('aceito') pedidoAceito: boolean) {
    return this.ordersService.processOrder(+id, pedidoAceito);
  }

  @Get('cozinha/pedido/:id')
  findProductsByOrder(@Param('id') id: string) {
    return this.ordersService.findProductsByOrder(+id);
  }
}
