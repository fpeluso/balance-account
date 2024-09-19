import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './service/kafka.service';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [AccountsModule],
  providers: [KafkaConsumerService],
})
export class EventsModule {}
