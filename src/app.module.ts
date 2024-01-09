import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/config.db';
import { ClientModule } from './clients/client.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './Auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ComboModule } from './combo/combo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    OrdersModule,
    ClientModule,
    ProductModule,
    AuthModule,
    ComboModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
