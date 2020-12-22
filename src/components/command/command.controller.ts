import {Body, Controller, HttpStatus, Post, Res, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {CoffeService} from "../coffe/coffe.service";
import {CommandService} from "./command.service";
import {CreateCoffeDto} from "../coffe/dto/createCoffeDto";
import {CreateCommandCoffeDto} from "./dto/createCommandCoffeDto";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../../common/File/file.service";
import {UserService} from "../user/user.service";

@Controller('command')
export class CommandController {
    constructor(private readonly CommandService: CommandService,
                private readonly Fileservice: FileUploadService,
    ) {

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

    @Post('upload1')
    @UseInterceptors(FileFieldsInterceptor([
        { name: "coverImage" },
    ]))
    async uploadfile1(@UploadedFiles() files,@Res() res)
    {
       // const mimeType = await this.Fileservice.validateFile(files);
        const data = await this.Fileservice.upload("png",files.coverImage[0]);

            return await res.status(HttpStatus.CREATED).json({
                message: 'File uploaded',data});


    }



}
