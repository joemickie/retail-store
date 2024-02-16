import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from '../services/dto/create-product.dto';
import { UpdateProductDto } from '../services/dto/update-product.dto';
import Product from 'src/models/product.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private readonly productModel: typeof Product) {}

    async findAll(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const productData = { ...createProductDto };
        return this.productModel.create(productData);
    }

    async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        const product = await this.findOne(id);
        await product.update(updateProductDto);
        return product;
    }

    async delete(id: number): Promise<void> {
        const product = await this.findOne(id);
        await product.destroy();
    }
}
