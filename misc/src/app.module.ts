import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { DecoratorsModule } from './decorators/decorators.module';
import { NotificadorModule } from './dinamico1/notificador/notificador.module';
import { NotificadorEmailModule } from './dinamico1/notificador-email/notificador-email.module';
import { NotificadorSmsModule } from './dinamico1/notificador-sms/notificador-sms.module';
import { SuporteModule } from './dinamico2/suporte/suporte.module';
import { FinanceiroModule } from './dinamico2/financeiro/financeiro.module';
import { AdministrativoModule } from './dinamico2/administrativo/administrativo.module';
import { CicloVidaModule } from './ciclo-vida/ciclo-vida.module';
import { ConfigModule } from '@nestjs/config';
import { EnvModule } from './env/env.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ProvidersModule, 
    DecoratorsModule, 
    NotificadorModule, 
    NotificadorEmailModule, 
    NotificadorSmsModule, 
    SuporteModule.forRoot({nomeEmpresa:"Empresa Legal", mensagemPadrao:"Como posso ajudar?"}), 
    FinanceiroModule, 
    AdministrativoModule,
    CicloVidaModule,
    ConfigModule.forRoot({isGlobal: true}),
    EnvModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
