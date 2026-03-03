import { Module } from '@nestjs/common';
import { ComentariosController } from './comentarios.controller';

@Module({
  controllers: [ComentariosController]
})
export class ComentariosModule {}
