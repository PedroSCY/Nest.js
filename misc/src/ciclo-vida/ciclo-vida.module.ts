import { Module } from '@nestjs/common';
import { CicloVidaService } from './ciclo-vida.service';

@Module({
  providers: [CicloVidaService]
})
export class CicloVidaModule {}
