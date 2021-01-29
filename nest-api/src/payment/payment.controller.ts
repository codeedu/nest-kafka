import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

//rxjs
//request-reply | request-response
@Controller()
export class PaymentController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('valida_alguma_coisa');
  }

  @MessagePattern('pagamentos')
  consumePayment(@Payload() message) {
    console.log(message.value);
    this.clientKafka.send(
      'valida_alguma_coisa',
      JSON.stringify({ key1: 'val1' }),
    ).subscribe(reply => console.log(reply));

    
  }
}


//#1 - Checkout -> envia mensagem -> Pagamentos
//#2 - Pagamento recebe a mensagem e envia uma nova mensagem para outra aplicacao
//#3 - Pagamento fica esperando que a outra aplicação confirme que recebeu mensagem
