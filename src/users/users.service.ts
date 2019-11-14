import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { UsersRO } from './users.interface';
import { UsersEntity } from '../entity/users.entity';
import { CreateUsers } from './users.create';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findAll() {
    return await this.usersRepository.find();
  }

  async create(params: CreateUsers) {
    console.log(params, "thissssssssssssssssssss")
    return {}
  }
}
