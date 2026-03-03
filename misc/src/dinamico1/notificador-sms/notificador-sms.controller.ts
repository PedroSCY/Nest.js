import { Controller, Get } from '@nestjs/common';
import { Notificador } from '../notificador/notificador';

@Controller('notificador-sms')
export class NotificadorSmsController {
    constructor(private readonly notificador:Notificador){}

    @Get()
    get(){
        return this.notificador.notificar("olá", "joão")
    }
}
