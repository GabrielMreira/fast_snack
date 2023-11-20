import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreatedProductDto } from './dto/created-product.dto';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product)
		private readonly producRepository: Repository<Product>,
	) {}

	async create(createProductDto: CreateProductDto) {
		const product: Product = await this.producRepository.save(createProductDto);
		return new CreatedProductDto(product);
	}

	async findAll() {
		return await this.producRepository.find();
	}

	async findOne(id: number) {
		return this.producRepository.findOneBy({ id });
	}

	async update(id: number, updateProductDto: UpdateProductDto) {
		const product = await this.producRepository.findOneBy({
			codigo: updateProductDto.codigo,
		});

		product.codigo = updateProductDto.codigo;
		product.codigoBarras = updateProductDto.codigoBarras;
		product.descricao = updateProductDto.descricao;
		product.preco = updateProductDto.preco;

		return this.producRepository.save(product);
	}

	async remove(id: number) {
		const product: Product = await this.producRepository.findOneBy({ id });
		await this.producRepository.remove(product);
		return product;
	}
}
