import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import Order from '../models/order.model';

@Injectable()
export class OrdersService {
    createOrder(createOrderDto: CreateOrderDto) {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectModel(Order) private readonly orderModel: typeof Order) {}

    async findAll(): Promise<Order[]> {
        return this.orderModel.findAll();
    }

    async findOne(id: number): Promise<Order> {
        const order = await this.orderModel.findByPk(id);
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }

    async create(createOrderDto: Omit<CreateOrderDto, 'id'>): Promise<Order> {
        return this.orderModel.create(createOrderDto);
    }

    async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
        const order = await this.findOne(id);
        await order.update(updateOrderDto);
        return order;
    }

    async delete(id: number): Promise<void> {
        const order = await this.findOne(id);
        await order.destroy();
    }
}
