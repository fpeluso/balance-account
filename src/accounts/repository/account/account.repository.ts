import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Account } from '../../entity/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountRepository extends Repository<Account> {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private dataSource: DataSource,
  ) {
    super(Account, dataSource.createEntityManager());
  }
}
