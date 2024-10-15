import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
  @ApiProperty({ description: 'The first name of the employee', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'The last name of the employee', example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'The email address of the employee', example: 'john.doe@example.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'The phone number of the employee', example: '+1234567890' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'The position of the employee', example: 'Software Developer' })
  @IsString()
  position: string;

  @ApiProperty({ description: 'The salary of the employee', example: 50000 })
  @IsNumber()
  salary: number;

  @ApiProperty({ description: 'The hire date of the employee', example: '2023-05-15' })
  @IsString()
  @IsOptional()
  hireDate: Date;
}
