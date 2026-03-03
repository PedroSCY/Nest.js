import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LogarAcessoInterceptor } from './logar-acesso/logar-acesso.interceptor';
import { LogarAcessoDec } from './meus-decorators/LogarAcessoDec';
import { TryCatch } from './meus-decorators/TryCatchDec';
import { QueryNumber } from './meus-decorators/QueryNumber';

@Controller('decorators')
export class DecoratorsController {
  constructor() {}

  @Get("/logar-acesso")
  @LogarAcessoDec()
  logarAcesso(){
    return "ok"
  }

  @Get("/erro")
  @TryCatch()
  erro(){
    throw Error("Deu ruim")
  }

  @Get("/param")
  param(@QueryNumber("n") n: number){
    return {valorObtido: n}
  }
}
