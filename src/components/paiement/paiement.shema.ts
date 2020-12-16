import {Schema} from "mongoose"

export const PaiementSchema = new Schema(
    {
        numCommand:{
          type:String,
          required:true,
        },
        nameCoffe:{
          type: String,
          required:true
        },
        payer: {
            type: String,
            required: true,
        },
        payerPar: {
            type: String,
            required: true,
        }
    }
)
