import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsers } from './users.create';

import { UsersRO } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }


  @Post()
  async create(@Body() params: CreateUsers) {
    return await this.usersService.create(params);
  }

}
