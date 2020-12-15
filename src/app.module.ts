import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./common/database/database.module";
import {CoffeModule} from "./components/coffe/coffe.module";

@Module({
  imports: [DatabaseModule,
           CoffeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
