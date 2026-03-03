import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UseInterceptors, UsePipes } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CriarProgramaDTO } from './dto/criarProgramaDTO';
import { EditarProgramaDTO } from './dto/editarProgramaDTO';
import { AdicionarInseridoEmPipe } from 'src/pipes/adicionar-inserido-em.pipe';
import { FormatarProgramaInterceptor } from 'src/interceptors/formatar-programa.interceptor';
import { CriarProgramaFilter } from 'src/filters/criar-programa.filter';

@Controller('programas')
export class ProgramasController {
    constructor(private readonly programasService: ProgramasService){}

    @Get()
    @UseInterceptors(FormatarProgramaInterceptor)
    buscarProgramas(){
        return this.programasService.buscarProgramas();
    }

    @Get(":id")
    @UseInterceptors(FormatarProgramaInterceptor)
    buscarProgramaPorId(@Param("id") id: string){
        return this.programasService.buscarProgramaPorId(Number(id))
    }

    @Post()
    @UsePipes(AdicionarInseridoEmPipe)
    // @UseFilters(CriarProgramaFilter) // exemplo de uso de filtro, mas também posso alterar a mensagem de erro do ValidationPipe, como mostrado no main.ts
    criarPrograma(@Body() programa: CriarProgramaDTO){
        return this.programasService.criarPrograma(programa);
    }

    @Put(":id")
    @UseInterceptors(FormatarProgramaInterceptor)
    editarPrograma(@Param("id") id: string, @Body() programa: EditarProgramaDTO){
        return this.programasService.editarPrograma(Number(id), programa)
    }

    @Delete(":id")
    deletarPrograma(@Param("id") id: string){
        return this.programasService.deletarPrograma(Number(id))
    }

}
