import { UsersEntity } from '../entity/users.entity';

export interface UsersData {
  name: string;
  address: string;
  avatar?: string;
  sex: boolean;
}

export interface UsersRO {
  users: UsersEntity[];
  usersCount: number;
}
