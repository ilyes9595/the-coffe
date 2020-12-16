import {Inject, Injectable} from '@nestjs/common';
import { COMMAND_PROVIDER} from "../../common/config";
import mongoose from "mongoose";
import {Command} from "./command.interface";

@Injectable()
export class CommandService {
    constructor( @Inject(COMMAND_PROVIDER) private readonly commandModel:mongoose.Model<Command>) {}

    async add(command) {
        return await this.commandModel.create(command);
    }



}
