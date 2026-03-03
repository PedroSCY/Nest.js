import { Module } from '@nestjs/common';
import { FinanceiroController } from './financeiro.controller';
import { SuporteModule } from '../suporte/suporte.module';

@Module({
  imports:[SuporteModule.forFeature({departamento:"Financeiro", prefixoProtocolo:"FIN"})],
  controllers: [FinanceiroController]
})
export class FinanceiroModule {}
