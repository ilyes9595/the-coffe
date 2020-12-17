import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
    @IsNotEmpty()
    @ApiProperty()
    password: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;
}
