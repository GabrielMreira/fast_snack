import { BaseProductDTO } from '../product/dto/base-product.dto';

export interface BaseController<T extends BaseProductDTO> {
	create(createProductDto: T);

	findAll();

	findOne(id: string);

	update(id: string, updateProductDto: T);

	remove(id: string);
}
