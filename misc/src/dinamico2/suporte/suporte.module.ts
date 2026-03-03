import { Global, Module } from '@nestjs/common';
import { OPCOES_FEATURE, OPCOES_ROOT } from './constantes';
import { SuporteService } from './suporte.service';
import { OpcoesFeature, OpcoesRoot } from './tipos';

@Module({})
@Global()
export class SuporteModule {
    static forRoot(opcoes:OpcoesRoot){

        const provider = {
            provide:OPCOES_ROOT,
            useFactory: () => opcoes
        }



        return{
            module:SuporteModule,
            providers:[provider],
            exports:[OPCOES_ROOT]
        }
    }

    static forFeature(opcoes:OpcoesFeature){

          const provider = {
            provide:OPCOES_FEATURE,
            useValue: opcoes
        }


        return{
            module:SuporteModule,
            providers:[provider, SuporteService],
            exports:[OPCOES_FEATURE, SuporteService]
        }
    }
}
