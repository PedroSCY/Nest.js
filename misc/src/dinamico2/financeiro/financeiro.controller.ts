import { Controller, Get } from '@nestjs/common';
import { SuporteService } from '../suporte/suporte.service';

@Controller('financeiro')
export class FinanceiroController {
    constructor(private readonly suporteService: SuporteService){}

    @Get()
    get(){
        return this.suporteService.suporte()
    }
}
