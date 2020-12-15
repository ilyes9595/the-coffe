import  {Schema}  from "mongoose"

export const CoffeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

    }
);


