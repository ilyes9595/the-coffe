import {Inject, Injectable } from '@nestjs/common';
import * as mongoose from "mongoose";
import {COFFE_PROVIDER} from "../../common/config";
import {Coffe} from "./coffe.interface";


@Injectable()
export class CoffeService {
    constructor(
        @Inject(COFFE_PROVIDER) private readonly coffeModel: mongoose.Model<Coffe>,
      ){}
    async add(coffe) {
        return await this.coffeModel.create(coffe);
    }
}
