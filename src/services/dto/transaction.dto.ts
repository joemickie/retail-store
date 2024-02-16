// transaction.dto.ts

import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsString()
  @IsOptional()
  paymentGatewayTransactionId?: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class UpdateTransactionDto {
  @IsOptional()
  @IsString()
  paymentGatewayTransactionId?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
