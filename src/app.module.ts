import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/config.db';
import { ClientModule } from './clients/client.module';
import { KitchenModule } from './kitchen/kitchen.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductModule, ClientModule, KitchenModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}