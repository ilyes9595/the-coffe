import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {CoffeService} from "../coffe/coffe.service";
import {CreateCoffeDto} from "../coffe/dto/createCoffeDto";
import {PaiementService} from "./paiement.service";
import {createPaiementCoffeDto} from "./dto/createPaiementCoffeDto";

@Controller('paiement')
export class PaiementController {
    constructor(private readonly paiementService: PaiementService) {

    }

    @Post()
    async create(@Res() res, @Body() body: createPaiementCoffeDto) {
        const data = await this.paiementService.add(body);
        return await res.status(HttpStatus.CREATED).json({
            message: 'paiement  created',
            data,
        });
    }

}
