import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UsersMigration1573721340661 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'text',
          },
          {
            name: 'sex',
            type: 'boolean',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_QUESTION_NAME',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
