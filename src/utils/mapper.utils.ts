import { AccountInterface } from '../accounts/interfaces/account.interface';
import { Account } from '../accounts/entity/account.entity';

export const accountDtoToEntity = (account: AccountInterface): Account => {
  return {
    ...account,
  };
};
