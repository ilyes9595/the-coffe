import {Schema} from "mongoose";

export const CommandSchema = new Schema(
    {
        name_coffe: {
            type: String,
            required: true,
        },
        delivrerPar:{
            type: String,
            required: true
        },
        serverPar:{
            type: String,
            required: true
        }
    }
);
