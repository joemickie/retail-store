import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';
import { CreateOrderDto } from 'src/services/dto/create-order.dto'; 

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.createOrder(createOrderDto);
    }
}
