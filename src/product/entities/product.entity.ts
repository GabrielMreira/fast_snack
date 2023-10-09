import {
  BaseEntity,
  Column,
  Entity,
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
}
