import { Injectable, Inject } from '@nestjs/common';
import { SentMessageInfo } from 'nodemailer';
import { EmailOptions } from './email-options';
import {MailerService} from "@nestjs-modules/mailer";
@Injectable()
export class EmailsService {
    constructor(
       private readonly mailerProvider: MailerService, 
    ) { }
    async sendEmail(email, options: EmailOptions ,context): Promise<SentMessageInfo> {
        return await this.mailerProvider.sendMail({
            to: email,
            subject: options.subject,
            template: options.template,
            context,
        });
    }
    
}
