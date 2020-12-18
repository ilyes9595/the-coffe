import { Controller, Post, Res, Body, HttpStatus, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiOkResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiConflictResponse, ApiUnauthorizedResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/components/user/user.service';
import * as bcrypt from 'bcrypt';
import { InputValidationPipe } from '../input-validation.pipe';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }

    @Post('login')
    //#region Swagger decorators
    @ApiOkResponse({ description: 'Return token and user.' })
    @ApiBadRequestResponse({ description: 'Email and password are required.' })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
    //#endregion
    @UsePipes(new InputValidationPipe)
    async login(
        @Res() res,
        @Body() body: LoginDto,
    ) {
        try {
            const email = body.email;
            const password = body.password;

            if (!email || !password) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    error: 'Email and password are required.',
                    statusCode: HttpStatus.BAD_REQUEST,
                });
            }

            const user = await this.userService.findOneByEmail(email);
            if (!user) {
                console.log(user)
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    message: 'Invalid credentials.',
                });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const accesstoken = await this.authService.createToken(body.email);
                return res.status(HttpStatus.OK).json({
                    message: 'Login successful.',
                    data: {
                        user,
                        accesstoken,
                    },
                    status: 200,
                });
            }
            return res.status(HttpStatus.UNAUTHORIZED).json({
                message: 'Invalid credentials.',
            });


        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: error.message,
            });
        }
    }

    /**
     * Register user and generate a token.
     * @param res
     * @param body
     */
    @Post('register')
    //#region Swagger decorators
    @ApiCreatedResponse({ description: 'Register successful.' })
    @ApiBadRequestResponse({ description: 'Email, password are required.' })
    @ApiConflictResponse({ description: 'User with this email already exists' })
    //#endregion

    @UsePipes(new InputValidationPipe)
    async register(@Res() res, @Body() body: RegisterDto) {
        try {
            const user = body;
            if (!body.email || !body.password) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    message: 'Email and password are required.',
                });
            }

            // To check if there is an existant user whith the same email.
            const userByEmail = await this.userService.findOneByEmail(body.email);

            if (userByEmail) {
                return res.status(HttpStatus.CONFLICT).json({
                    conflictWith: 'email',
                    message: 'User with this email already exists',
                });
            }

            const hashedPassword = await this.authService.hashPassword(body.password);
            user.password = hashedPassword;

            const createdUser = await this.userService.add(user);

            return res.status(HttpStatus.CREATED).json({
                data: {
                    user: createdUser,
                },
            });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error,
            });
        }
    }
}
