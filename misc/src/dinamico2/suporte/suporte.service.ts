import { Inject, Injectable } from '@nestjs/common';
import { OPCOES_FEATURE, OPCOES_ROOT } from './constantes';
import { OpcoesFeature, OpcoesRoot } from './tipos';

@Injectable()
export class SuporteService {
    constructor(
        @Inject(OPCOES_ROOT) private readonly opcoesRoot: OpcoesRoot,
        @Inject(OPCOES_FEATURE) private readonly obcoesFeature: OpcoesFeature
    ){} 

    suporte(){
        return `Você entrou em contato com o departamento ${this.obcoesFeature.departamento} da empresa ${this.opcoesRoot.nomeEmpresa} 
        Protocolo: ${this.obcoesFeature.prefixoProtocolo}-${Math.random() * 10000 | 0}
        ${this.opcoesRoot.mensagemPadrao}`
    }
}
