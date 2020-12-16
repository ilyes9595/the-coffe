import {Document} from "mongoose"

export interface Paiement extends Document {
    payer : boolean ,
    payerPar:string
    
}
