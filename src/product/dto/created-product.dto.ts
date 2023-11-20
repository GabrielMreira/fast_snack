import { Product } from '../entities/product.entity';
import { BaseProductDTO } from './base-product.dto';

export class CreatedProductDto extends BaseProductDTO {
	constructor(product: Product) {
		super();
		this.id = product.id;
		this.codigo = product.codigo;
		this.codigoBarras = product.codigoBarras;
		this.descricao = product.descricao;
		this.preco = product.preco;
	}

	id: number;
	codigo: string;
	codigoBarras: string;
	descricao: string;
	preco: number;
}
