import { Module } from '@nestjs/common';
import { AccountController } from './controller/account/account.controller';
import { AccountService } from './service/account/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService, TypeOrmModule],
})
export class AccountsModule {}
