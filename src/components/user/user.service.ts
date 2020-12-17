import {Inject, Injectable} from '@nestjs/common';
import * as mongoose from "mongoose";
import {USER_PROVIDER} from "../../common/config";
import {User} from "./user.interface";

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_PROVIDER) private readonly userModel: mongoose.Model<User>,
    ) {
    }

    async add(user) {
        return await this.userModel.create(user);
    }

    async delete(id) {
        return this.userModel.findByIdAndDelete(id);
    }

    async getOne(id) {
        return await this.userModel.findById(id).exec();
    }

    async get() {
        return await this.userModel.find().exec();
    }

    async update(id, user) {
        return this.userModel.findByIdAndUpdate(id, {
            $set: user,
        })
    }

    async findOneByEmail(email) {
        return this.userModel.findOne({email});
    }

}
