import {COMMAND_PROVIDER, DB_PROVIDER} from "../../common/config";
import {Connection} from "mongoose";
import {CommandSchema} from "./command.schema";

export const CommandProvider = [
    {
        provide :COMMAND_PROVIDER,
        useFactory:(connection:Connection)=>
            connection.model('Command', CommandSchema),
        inject: [DB_PROVIDER],

    }

]
