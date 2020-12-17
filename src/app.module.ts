import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./common/database/database.module";
import {CoffeModule} from "./components/coffe/coffe.module";
import {CommandService} from "./components/command/command.service";
import {CommandModule} from "./components/command/command.module";
import {PaiementModule} from "./components/paiement/paiement.module";
import {UserModule} from "./components/user/user.module";
import {AuthModule} from "./common/auth/auth.module";

@Module({
  imports: [DatabaseModule,
           CoffeModule,CommandModule,PaiementModule,UserModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
