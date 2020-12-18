import {Body, Controller, HttpStatus, Post, Res, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {CoffeService} from "../coffe/coffe.service";
import {CommandService} from "./command.service";
import {CreateCoffeDto} from "../coffe/dto/createCoffeDto";
import {CreateCommandCoffeDto} from "./dto/createCommandCoffeDto";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../../common/File/file.service";

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
    @Post('upload')
    //async upload(@Res() res ,@Body():)
    @UseInterceptors(FileInterceptor("photo",{
        dest:"./uploads",
    }))
   async uploadFile(@UploadedFiles() files,@Res() res) {
        console.log(files);
        return await res.status(HttpStatus.CREATED).json({
            message: 'File uploaded'});
    }


}
