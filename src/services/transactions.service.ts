import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';
import Transaction from '../models/transaction.model';

@Injectable()
export class TransactionsService {
    constructor(@InjectModel(Transaction) private readonly transactionModel: typeof Transaction) {}

    async findAll(): Promise<Transaction[]> {
        return this.transactionModel.findAll();
    }

    async findOne(id: number): Promise<Transaction> {
        const transaction = await this.transactionModel.findByPk(id);
        if (!transaction) {
            throw new NotFoundException(`Transaction with ID ${id} not found`);
        }
        return transaction;
    }

    async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        const transactionData = { ...createTransactionDto };
        return this.transactionModel.create(transactionData);
    }

    async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
        const transaction = await this.findOne(id);
        await transaction.update(updateTransactionDto);
        return transaction;
    }

    async delete(id: number): Promise<void> {
        const transaction = await this.findOne(id);
        await transaction.destroy();
    }
}
