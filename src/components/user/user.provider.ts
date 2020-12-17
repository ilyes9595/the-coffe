import {DB_PROVIDER, USER_PROVIDER} from "../../common/config";
import {Connection, connection} from "mongoose";
import { UserSchema} from "./user.schema";


export const UserProvider = [
    {
        provide:USER_PROVIDER,
        useFactory:(connection: Connection)=>
            connection.model("User", UserSchema),
        inject :[DB_PROVIDER],

    }




]
