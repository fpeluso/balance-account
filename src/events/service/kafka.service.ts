import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import { AccountService } from '../../accounts/service/account/account.service';
import { AccountInterface } from '../../accounts/interfaces/account.interface';
import { Account } from '../../accounts/entity/account.entity';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  constructor(private readonly accountsService: AccountService) {}
  private readonly kafka = new Kafka({
    clientId: 'nestjs-client',
    brokers: ['localhost:9092'],
  });

  async onModuleInit() {
    const consumer = this.kafka.consumer({ groupId: 'my-consumer-group' });
    await consumer.connect();
    await consumer.subscribe({ topic: 'update-account', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          value: message.value?.toString(),
        });

        const parsedMessage = JSON.parse(message.value?.toString() ?? '');
        const currentAccount: Account[] =
          await this.accountsService.findOne(23);
        const currentBalance: number = +currentAccount[0].balance;
        const amount: number = +parsedMessage.amount;
        const newAmount = currentBalance + amount;
        await this.accountsService.update(23, {
          id: 23,
          balance: newAmount,
          name: 'Illimity',
        });
      },
    });
  }
}
