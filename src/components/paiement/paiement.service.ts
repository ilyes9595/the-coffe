import {Inject, Injectable} from '@nestjs/common';
import {CommandProvider} from "../command/command.provider";
import * as mongoose from "mongoose";
import {Coffe} from "../coffe/coffe.interface";
import {Paiement} from "./paiement.interface";
import {PAIEMENT_PROVIDER} from "../../common/config";

@Injectable()
export class PaiementService {
    constructor(@Inject(PAIEMENT_PROVIDER) private readonly PaiementModel: mongoose.Model<Paiement> ) {
    }
    async add(paiement) {
        return await this.PaiementModel.create(paiement);
    }

}
