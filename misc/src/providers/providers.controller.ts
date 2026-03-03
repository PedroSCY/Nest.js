import { Controller, Get, Inject } from '@nestjs/common';

import { MinhaClasse } from './tipos/Classe';
import { FUNCAO, OBJ, REUSO } from './constantes';

@Controller('providers')
export class ProvidersController {
  constructor(
    private readonly minhaClasse: MinhaClasse,
    @Inject(FUNCAO) private readonly minhaFuncao: any,
    @Inject(OBJ) private readonly meuObjeto: any,
    @Inject(REUSO) private readonly reusado: any
  ) {}

  @Get("/classe")
  classe(){
    return this.minhaClasse.fn()
  }

  @Get("/funcao")
  funcao(){
    return this.minhaFuncao()
  }

  @Get("/objeto")
  objeto(){
    return this.meuObjeto
  }
 
  @Get("/reuso")
  reuso(){
    return this.reusado.fn()
  }
  
}
