import {Injectable, Req, UnauthorizedException} from '@nestjs/common';
import {JwtPayload} from './jwt-payload.interface';
import {JwtService} from '@nestjs/jwt';
import {ExtractJwt} from 'passport-jwt';
import {UserService} from 'src/components/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private  readonly userService: UserService
    ) { }
    async createResetPasswordToken(email) {
        const user: JwtPayload = { email };
        return this.jwtService.sign(user, {
            expiresIn: '10h',
        });
    }
    async createToken(email) {
        const user: JwtPayload = { email };
        return this.jwtService.sign(user);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.findOneByEmail(payload.email);
    }

    /**
     * Crypt the password
     * @param password
     */
    async hashPassword(password: string | undefined): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async verifyToken(token) {
        try {
            this.jwtService.verify(token);
            return true;
        } catch (err) {
            throw new UnauthorizedException();
        }
    }

    /**
     * Get the authenticated user with the token given in header
     * @param req
     */
    async getAuthUser(@Req() req) {
        const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        const payload: any = this.jwtService.decode(jwtFromRequest, {});
        if (!payload) {
            return null;
        }
        return await this.userService.findOneByEmail(payload.email);
    }
}
