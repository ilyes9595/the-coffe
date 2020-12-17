import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UserService} from "./user.service";
import {CreateDto} from "./dto/create.dto";
import {UpdateDto} from "./dto/update.dto";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    @Get()
    async find(@Res() res, @Param('id') id: string) {
        let data;
        if (id) {
            data = await this.userService.getOne(id);
            return await res.status(HttpStatus.OK).json({
                message: 'data fetched',
                data,
            });
        }
        data = await this.userService.get();
        return await res.status(HttpStatus.OK).json({
            message: 'data fetched',
            data,
        });
    }

    @Get()
    async findAll(@Res() res,) {
        let data;
        data = await this.userService.get();
        return await res.status(HttpStatus.OK).json({
            message: 'data fetched',
            data,
        });
        data = await this.userService.get();
        return await res.status(HttpStatus.OK).json({
            message: 'data fetched',
            data,
        });
    }

    @Post()
    async create(@Res() res, @Body() body: CreateDto) {
        const data = await this.userService.add(body);
        return await res.status(HttpStatus.CREATED).json({
            message: 'User created',
            data,
        });
    }

    @Put(':id')
    async update(@Res() res, @Body() body: UpdateDto, @Param('id') id: string) {
        const userToUpdate = await this.userService.getOne(id);
        if (!userToUpdate) {
            return await res.status(HttpStatus.BAD_REQUEST).json({
                error: 'Invalid ID',
            });
        }
        const user = {
            name: body.name,
            email: body.email,
            password: body.password,
        }
        const data = this.userService.update(id, user);
        return await res.status(HttpStatus.OK).json({
            message: 'User created',
            data,
        });
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id: string) {
        const userToDelete = await this.userService.getOne(id);
        if (!userToDelete) {
            return await res.status(HttpStatus.BAD_REQUEST).json({
                error: 'Invalid ID',
            });
        }
        const data = this.userService.delete('' + id);
        return await res.status(HttpStatus.ACCEPTED).json({
            message: 'User deleted',
            data,
        });
    }
}
