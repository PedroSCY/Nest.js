import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CrudFilmesService } from './crud-filmes.service';
import { CriarFilmeDto } from './dto/CriarFilmeDTO';
import { EditarFilmeDto } from './dto/EditarFilmeDTO';


@Controller('crud-filmes')
export class CrudFilmesController {
  constructor(private readonly crudFilmesService: CrudFilmesService) {}

  @Get()
  pegarTodos(@Query('invertido') invertido: string) {
    return this.crudFilmesService.pegarTodos(invertido === "true");
  }

  @Post()
  criar(@Body() DTO: CriarFilmeDto) {
    return this.crudFilmesService.criar(DTO);
  }

  @Get(":id")
  pegarUm(@Param("id") id: string) {
    return this.crudFilmesService.pegarUm(id);
  }

  @Put(":id")
  AtualizarUm(@Param("id") id: string, @Body() DTO: EditarFilmeDto) {
      return this.crudFilmesService.atualizarUm(id, DTO);
  }

  @Delete(":id")
  deletarUm(@Param("id") id: string) {
      return this.crudFilmesService.deletarUm(id);
  }
}
