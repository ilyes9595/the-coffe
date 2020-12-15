import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CoffeService} from "./coffe.service";
import {CreateCoffeDto} from "./dto/createCoffeDto";

@ApiTags('coffe')
@Controller('coffe')
export class CoffeController {
 constructor(private readonly coffeService: CoffeService) {

 }

 @Post()
    async create(@Res() res, @Body() body: CreateCoffeDto) {
        const data = await this.coffeService.add(body);
        return await res.status(HttpStatus.CREATED).json({
            message: 'Coffees created',
            data,
        });
    }




}
