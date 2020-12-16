import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {CoffeService} from "../coffe/coffe.service";
import {CommandService} from "./command.service";
import {CreateCoffeDto} from "../coffe/dto/createCoffeDto";
import {CreateCommandCoffeDto} from "./dto/createCommandCoffeDto";

@Controller('command')
export class CommandController {
    constructor(private readonly CommandService: CommandService) {

    }

    @Post()
    async create(@Res() res, @Body() body: CreateCommandCoffeDto) {
        const data = await this.CommandService.add(body);
        return await res.status(HttpStatus.CREATED).json({
            message: 'Commande created',
            data,
        });
    }

}
