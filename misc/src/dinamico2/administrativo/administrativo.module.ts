import { Module } from '@nestjs/common';
import { AdministrativoController } from './administrativo.controller';
import { SuporteModule } from '../suporte/suporte.module';

@Module({
   imports:[SuporteModule.forFeature({departamento:"Administraticvo", prefixoProtocolo:"ADM"})],
  controllers: [AdministrativoController]
})
export class AdministrativoModule {}
