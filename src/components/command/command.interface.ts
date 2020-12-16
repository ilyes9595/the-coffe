import {Document} from "mongoose";

export  interface Command extends Document {
    name_coffe :string ;
    delivrerPar: string;
    serverPar :string ;

}
