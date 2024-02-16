import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../services/dto/create-product.dto';
import { UpdateProductDto } from '../services/dto/update-product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }
}
