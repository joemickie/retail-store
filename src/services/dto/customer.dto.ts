import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsNotEmpty()
  @IsStrongPassword()
  readonly password: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
}
