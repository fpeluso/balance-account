import { Injectable } from '@nestjs/common';
import { AccountInterface } from '../../interfaces/account.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../../entity/account.entity';
import { accountDtoToEntity } from '../../../utils/mapper.utils';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  create(createAccountDto: AccountInterface) {
    return this.accountRepository.save(accountDtoToEntity(createAccountDto));
  }

  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.find({
      where: { id },
    });
  }

  update(id: number, updateAccountDto: AccountInterface) {
    return this.accountRepository.update(
      id,
      accountDtoToEntity(updateAccountDto),
    );
  }

  remove(id: number) {
    return this.accountRepository.delete(id);
  }
}
