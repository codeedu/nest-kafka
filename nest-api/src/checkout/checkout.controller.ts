import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller('checkout')
export class CheckoutController implements OnModuleInit {
  private kafkaProducer: Producer;

  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
      this.kafkaProducer = await this.clientKafka.connect();
  }

  @Get()
  async checkout() {
      const result = await this.kafkaProducer.send({
          topic: 'pagamentos',
          messages: [
              {key: Math.random()+"", value: JSON.stringify({order: 1000, client: 'FullCycle'}) }
          ]
      });

      //console.log(result);
  }
}
