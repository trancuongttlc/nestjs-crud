import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  address: string;

  @Column()
  avatar: string;

  @Column({ default: true })
  sex: boolean;
}
