import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import {CoffeController} from "../coffe/coffe.controller";
import {CoffeService} from "../coffe/coffe.service";
import {CoffeProvider} from "../coffe/coffe.provider";
import {CommandProvider} from "./command.provider";
import {CommandController} from "./command.controller";
import {DatabaseModule} from "../../common/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [CommandService,...CommandProvider],
  controllers: [CommandController],
  exports: []
})
export class CommandModule {}
