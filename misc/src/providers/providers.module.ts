import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { MinhaClasse } from './tipos/Classe';
import { Funcao } from './tipos/Funcao';
import { FUNCAO, OBJ, REUSO } from './constantes';
import { MeuObjeto } from './tipos/Objeto';

@Module({
  controllers: [ProvidersController],
  providers: [{provide: MinhaClasse, useClass: MinhaClasse},
    {provide: FUNCAO, useFactory: () => Funcao},
    {provide: OBJ, useValue: MeuObjeto},
    {provide: REUSO, useExisting:MinhaClasse}
  ],
})
export class ProvidersModule {}
