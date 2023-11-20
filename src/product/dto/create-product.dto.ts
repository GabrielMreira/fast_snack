import {
	IsNotEmpty,
	IsString,
	IsOptional,
	IsNumber,
	MaxLength,
} from 'class-validator';
import { BaseProductDTO } from './base-product.dto';

export class CreateProductDto extends BaseProductDTO {
	@IsNotEmpty({ message: 'Insira um codigo para o produto' })
	@IsNumber()
	codigo: string;

	@IsString({ message: 'Digite um codigo válido' })
	@MaxLength(13, { message: 'Numero de caracteres máximo atingido' })
	codigoBarras: string;

	@IsOptional()
	@IsString()
	descricao: string;

	@IsOptional()
	@IsNumber()
	preco: number;

	@IsNotEmpty()
	@IsNumber()
	statusId: number;
}
