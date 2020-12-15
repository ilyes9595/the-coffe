import { Module } from '@nestjs/common';
import {DatabaseModule} from "../../common/database/database.module";
import {CoffeController} from "./coffe.controller";
import {CoffeService} from "./coffe.service";
import {CoffeProvider} from "./coffe.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [CoffeController],
    providers: [CoffeService,...CoffeProvider],
    exports: []

})
export class CoffeModule {
}

