import { Module } from '@nestjs/common';
import {DatabaseModule} from "../../common/database/database.module";
import {PaiementController} from "./paiement.controller";
import {PaiementService} from "./paiement.service";
import {PaiementProvider} from "./paiement.provider";

@Module({
    imports:[DatabaseModule],
    providers:[PaiementService,...PaiementProvider],
    controllers:[PaiementController],
    exports:[]

})
export class PaiementModule {}
