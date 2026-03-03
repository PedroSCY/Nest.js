import { Controller, Get } from '@nestjs/common';
import { SuporteService } from '../suporte/suporte.service';

@Controller('administrativo')
export class AdministrativoController {
    constructor(private readonly suporteService: SuporteService){}
    
        @Get()
        get(){
            return this.suporteService.suporte()
        }
}
