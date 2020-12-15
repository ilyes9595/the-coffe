import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export  class CreateCoffeDto {
    @ApiProperty({description:'The name of a coffee.'})
    @IsString()
    readonly name: string;
}
