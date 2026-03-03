import { Module } from '@nestjs/common';
import { ProgramasController } from './programas.controller';
import { ProgramasService } from './programas.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProgramasController],
  providers: [ProgramasService],
  imports: [AuthModule],
})
export class ProgramasModule {}
