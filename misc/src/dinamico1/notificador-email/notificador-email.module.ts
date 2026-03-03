import { Module } from '@nestjs/common';
import { NotificadorEmailController } from './notificador-email.controller';
import { NotificadorModule } from '../notificador/notificador.module';

@Module({
  imports:[NotificadorModule.register("email")],
  controllers: [NotificadorEmailController]
})
export class NotificadorEmailModule {}
