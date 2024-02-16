import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Customer from 'src/models/customer.model';
import { CustomersController } from 'src/controllers/customers.controller';
import { CustomersService } from 'src/services/customers.service';

@Module({
    imports: [SequelizeModule.forFeature([Customer])],
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule {}
