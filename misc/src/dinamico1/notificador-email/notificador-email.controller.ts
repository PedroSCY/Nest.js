import { Controller, Get } from '@nestjs/common';
import { Notificador } from '../notificador/notificador';

@Controller('notificador-email')
export class NotificadorEmailController {
    constructor(private readonly notificador:Notificador){}
    
        @Get()
        get(){
            return this.notificador.notificar("Bom dia", "Maria")
        }
}
