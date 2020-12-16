import {DB_PROVIDER, PAIEMENT_PROVIDER} from "../../common/config";
import {Connection, connection} from "mongoose";
import {PaiementSchema} from "./paiement.shema";

export const PaiementProvider =[
    {
        provide: PAIEMENT_PROVIDER,
        useFactory: (connection: Connection) =>
            connection.model("Paiement", PaiementSchema),
        inject: [DB_PROVIDER],

    }

]
