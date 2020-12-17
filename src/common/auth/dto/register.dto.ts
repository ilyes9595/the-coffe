import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
    @IsNotEmpty()
    @ApiProperty()
    password: string;
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @ApiPropertyOptional()
    emailConfirmationToken?: string;
}
