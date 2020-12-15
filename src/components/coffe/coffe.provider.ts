import {COFFE_PROVIDER, DB_PROVIDER} from "../../common/config";
import {connection, Connection} from "mongoose";
import {CoffeSchema} from "./coffe.schema";

export const CoffeProvider = [
    {
        provide :COFFE_PROVIDER,
        useFactory:(connection:Connection)=>
            connection.model('Coffe', CoffeSchema),
        inject: [DB_PROVIDER],

    }

]

