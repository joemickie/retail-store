import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto'
import Customer from '../models/customer.model';

@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer) private readonly customerModel: typeof Customer) {}

    async findAll(): Promise<Customer[]> {
        return this.customerModel.findAll();
    }

    async findOne(id: number): Promise<Customer> {
        const customer = await this.customerModel.findByPk(id);
        if (!customer) {
            throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return customer;
    }

    async create(createCustomerDto: Omit<CreateCustomerDto, 'id'>): Promise<Customer> {
        return this.customerModel.create(createCustomerDto);
    }

    async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
        const customer = await this.findOne(id);
        await customer.update(updateCustomerDto);
        return customer;
    }

    async delete(id: number): Promise<void> {
        const customer = await this.findOne(id);
        await customer.destroy();
    }
}
