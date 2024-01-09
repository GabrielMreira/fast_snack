/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['id'])
export class Combo extends BaseEntity {
	@PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false, type: 'varchar'})
	nome: string;

	@Column({nullable: false, type: 'varchar'})
    descricao: string;

    @Column({nullable: false, type: 'double precision'})
	valor: number;
}
