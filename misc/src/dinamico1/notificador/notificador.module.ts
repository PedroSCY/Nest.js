import { Module } from '@nestjs/common';
import { Notificador } from './notificador';

@Module({})
export class NotificadorModule {
    static register(meio:"email" | "sms"){
        const provider = {
            provide: Notificador,
            useValue: new Notificador(meio)
        }

        return {
            module: NotificadorModule,
            providers:[provider],
            exports:[Notificador]
        }
    }
}
