import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { MeuFiltroFilter } from './meu-filtro/meu-filtro.filter';
import { Erro } from './personalizados/Erro';
import { ErroHTTP } from './personalizados/ErroHTTP';

@Controller('erros')
@UseFilters(MeuFiltroFilter)
export class ErrosController {

    @Get()
    erro(){
        throw new Error('Erro de teste');
    }

    @Get("/http")
    erroHTTP(){
        throw new HttpException("Deu ruim", HttpStatus.BAD_REQUEST)
    }

     @Get("/personalizado")
    erroPersonalizado(){
        throw new Erro();
    }

    @Get("/personalizadoHTTP")
    erroPersonalizadoHTTP(){
        throw new ErroHTTP();
    }
}
