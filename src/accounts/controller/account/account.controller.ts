import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from '../../service/account/account.service';
import { AccountInterface } from '../../interfaces/account.interface';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: AccountInterface) {
    return await this.accountService.create(createAccountDto);
  }

  @Get()
  async findAll() {
    return await this.accountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.accountService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAccountDto: AccountInterface,
  ) {
    return await this.accountService.update(id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.accountService.remove(id);
  }
}
