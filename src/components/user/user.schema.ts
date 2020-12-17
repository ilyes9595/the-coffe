import {Schema} from "mongoose"
export const UserSchema =  new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'User',
        enum: ['User', 'Administrator'],
        required: true,
    }
}, {
    timestamps: true,
});
