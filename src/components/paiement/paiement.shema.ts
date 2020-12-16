import {Schema} from "mongoose"

export const PaiementSchema = new Schema(
    {
        payer: {
            type: Boolean,
            required: true,
        },
        payerPar: {
            type: String,
            required: true,
        }

    }
)
