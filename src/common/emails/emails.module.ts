import { Module } from '@nestjs/common';
import { MAILER_CONFIG } from '../config';
import { EmailsService } from './emails.service';
import {MailerModule} from "@nestjs-modules/mailer";

@Module({
  imports: [MailerModule.forRoot(MAILER_CONFIG)],
  providers: [EmailsService],
  exports: [EmailsService],
})
export class EmailsModule {}
