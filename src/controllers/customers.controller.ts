import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from 'src/services/dto/customer.dto';
import { CustomersService } from 'src/services/customers.service';
import Customer from 'src/models/customer.model';


@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Customer> {
        const customer = await this.customersService.findOne(+id);
        if (!customer) {
            throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return customer;
    }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customersService.create(createCustomerDto);
    }
}
