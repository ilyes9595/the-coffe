import {IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export  class CreateCoffeDto {
    @ApiProperty({description:'The name of a coffee.'})
    @IsString()
     name: string;
    @IsNumber()
     prix:number;
}
