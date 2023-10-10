import { ProductOrder } from 'src/orders/entities/products-order.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['id', 'codigo'])
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'bigint' })
  codigo: string;

  @Column({ nullable: false, type: 'varchar', length: 13 })
  codigoBarras: string;

  @Column({ nullable: true, type: 'varchar', length: 80 })
  descricao: string;

  @Column({ nullable: false, type: 'float8' })
  preco: number;

  @Column({ nullable: false, type: 'bigint' })
  statusId: number;

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.produto)
  pedido_produto: Product[];
}
