import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateCommandCoffeDto {
    @ApiProperty({description:'The name of a coffee.'})
    @IsString()
    nameCoffe :string;
    @IsString()
    delivrerPar :string ;
    @IsString()
    serverPar : string ;






}
