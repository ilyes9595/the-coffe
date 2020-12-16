import {Document} from "mongoose"

export interface Paiement extends Document {
    numCommand:string;
    nameCoffe:string;
    payer : string;
    payerPar:string;
}
