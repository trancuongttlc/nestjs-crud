import { IsNotEmpty } from 'class-validator';

export class CreateUsers {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly address: string;

}