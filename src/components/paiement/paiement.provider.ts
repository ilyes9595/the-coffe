import {DB_PROVIDER, PAIEMENT_PROVIDER} from "../../common/config";
import {Connection, connection} from "mongoose";
import {CommandSchema} from "../command/command.schema";

export const PaiementProvider =[
    {
        provider: PAIEMENT_PROVIDER,
        useFactory: (connection: Connection) =>
            connection.model("Command", CommandSchema),
        inject: [DB_PROVIDER],

    }

]
