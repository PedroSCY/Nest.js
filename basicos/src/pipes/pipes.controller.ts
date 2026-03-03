import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { MoedaPipe } from './moeda/moeda.pipe';
import { ValidarEmailPipe } from './validar-email/validar-email.pipe';

@Controller('pipes')
export class PipesController {
    @Post("/moeda")
    @UsePipes(MoedaPipe)
    pipeTransforma(@Body() dados:any){
        const {preco} = dados
        return `Preço obtido: ${preco}`;
    }

    @Get("/email")
    @UsePipes(ValidarEmailPipe)
    pipeValidar(@Query('email') email:string){
        return `Email obtido: ${email}`;
    }
}
