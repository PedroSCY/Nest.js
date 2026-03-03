import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CriarProgramaDTO } from './dto/criarProgramaDTO';
import { EditarProgramaDTO } from './dto/editarProgramaDTO';
import { AdicionarInseridoEmPipe } from 'src/pipes/adicionar-inserido-em.pipe';
import { FormatarProgramaInterceptor } from 'src/interceptors/formatar-programa.interceptor';
import { CriarProgramaFilter } from 'src/filters/criar-programa.filter';
import { JwtGuard } from 'src/jwt-guard/jwt.guard';
import { EmailUsuario } from 'src/pegar-email/pegar-email.decorator';

@Controller('programas')
@UseGuards(JwtGuard)
export class ProgramasController {
    constructor(private readonly programasService: ProgramasService){}

    @Get()
    @UseInterceptors(FormatarProgramaInterceptor)
    buscarProgramas(@EmailUsuario() email: string){
        return this.programasService.buscarProgramas(email);
    }

    @Get(":id")
    @UseInterceptors(FormatarProgramaInterceptor)
    buscarProgramaPorId(@Param("id") id: string,@EmailUsuario() email: string){
        return this.programasService.buscarProgramaPorId(Number(id),email)
    }

    @Post()
    // @UsePipes(AdicionarInseridoEmPipe)
    // @UseFilters(CriarProgramaFilter) // exemplo de uso de filtro, mas também posso alterar a mensagem de erro do ValidationPipe, como mostrado no main.ts
    criarPrograma(@Body(AdicionarInseridoEmPipe) programa: CriarProgramaDTO,@EmailUsuario() email: string){
        return this.programasService.criarPrograma(programa,email);
    }

    @Put(":id")
    @UseInterceptors(FormatarProgramaInterceptor)
    editarPrograma(@Param("id") id: string, @Body() programa: EditarProgramaDTO,@EmailUsuario() email: string){
        return this.programasService.editarPrograma(Number(id), programa,email)
    }

    @Delete(":id")
    deletarPrograma(@Param("id") id: string,@EmailUsuario() email: string){
        return this.programasService.deletarPrograma(Number(id),email)
    }

}
