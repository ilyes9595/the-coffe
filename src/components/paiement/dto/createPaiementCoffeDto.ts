import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsString} from "class-validator";

export class createPaiementCoffeDto {
    @ApiProperty({description:""})
    @IsString()
    NumCommand : string;
    @IsString()
    nameCoffe : string;
    @IsString()
    payer: string;
    @IsString()
    payerPar : string;
}
