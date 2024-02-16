import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Transaction from "../models/transaction.model";
import { Paystack } from 'paystack';

@Injectable()
export class PaymentService {
    private readonly paystack: Paystack;

    constructor(@InjectModel(Transaction) private readonly transactionModel: typeof Transaction) {
        this.paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);
    }

    async createPaymentIntent(amount: number, email: string) {
        // Create a transaction in your database
        const transaction = await this.transactionModel.create({
            // Add transaction details
            amount: amount,
            email: email,
            status: 'pending',
        });

        // Initialize payment with Paystack
        const paymentInit = await this.paystack.transaction.initialize({
            amount: amount * 100, // Paystack expects amount in kobo (1 NGN = 100 kobo)
            email: email,
            reference: transaction.id.toString(), // Use your transaction ID as reference
        });

        // Handle response from Paystack and update transaction status accordingly

        return paymentInit;
    }

    async verifyPayment(reference: string) {
        // Verify payment with Paystack
        const paymentVerification = await this.paystack.transaction.verify(reference);

        // Handle payment verification response

        return paymentVerification;
    }
}
