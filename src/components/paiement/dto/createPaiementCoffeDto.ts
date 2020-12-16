import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsString} from "class-validator";

export class createPaiementCoffeDto {
    @ApiProperty({description:""})
    @IsBoolean()
    paiement: boolean;
    @IsString()
    payerPar : string;
}
