import {Module} from '@nestjs/common';
import {DatabaseModule} from "../../common/database/database.module";
import {UserService} from "./user.service";
import {UserProvider} from "./user.provider";
import {UserController} from "./user.controller";


@Module({
    imports: [DatabaseModule],
    providers: [UserService, ...UserProvider],
    controllers: [UserController],
    exports: []
})

export class UserModule {
}
