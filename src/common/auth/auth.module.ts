import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import {JwtModule, JwtService} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AdminStrategy } from './admin.strategy';
import { AuthController } from './auth.controller';
import { JWT_SECRET_KEY } from '../config';
import { EmailsModule } from '../emails/emails.module';
import { UserModule } from 'src/components/user/user.module';
import {UserService} from "../../components/user/user.service";
import {UserProvider} from "../../components/user/user.provider";
import {DatabaseModule} from "../database/database.module";

@Module({imports: [
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secretOrPrivateKey: JWT_SECRET_KEY,
    signOptions: {
      expiresIn: '7d',
    },
  }),
  EmailsModule,
  DatabaseModule,
],
exports: [AuthService],
controllers: [AuthController],
providers: [AuthService, JwtStrategy, AdminStrategy,UserService ,...UserProvider],
})
export class AuthModule {}
