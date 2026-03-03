import { Module } from '@nestjs/common';
import { NotificadorSmsController } from './notificador-sms.controller';
import { NotificadorModule } from '../notificador/notificador.module';

@Module({
  imports:[NotificadorModule.register("sms")],
  controllers: [NotificadorSmsController]
})
export class NotificadorSmsModule {}
