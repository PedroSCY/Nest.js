import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

/* Métodos de interação em momentos diferentes do ciclo de vida 
para usar os metodos de destruição, é necessário habilitar os shutdown hooks no main.ts usando o app.enableShutdownHooks()
*/

@Injectable()
export class CicloVidaService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
// Esse método é chamado quando o módulo é inicializado, ou seja, quando o NestJS carrega o módulo e seus provedores.
  onModuleInit() {
    console.log('Iniciando o ciclo de vida do: módulo');
  }

// Esse método é chamado quando a aplicação é totalmente inicializada, ou seja, quando todos os módulos e provedores estão prontos para uso.
  onApplicationBootstrap() {
    console.log('Iniciando o ciclo de vida da: aplicação');
  }

// Esse método é chamado quando o módulo está prestes a ser destruído, ou seja, quando o NestJS está descarregando o módulo e seus provedores.
  onModuleDestroy() {
    console.log('destruindo o ciclo de vida do: módulo');
  }

// Esse método é chamado antes da aplicação ser destruída, ou seja, quando o NestJS está prestes a encerrar a aplicação e liberar os recursos.
  beforeApplicationShutdown(signal?: string) {
    console.log(`iniciando destruição do ciclo de vida da: aplicação, signal: ${signal}`);
  }

// Esse método é chamado quando a aplicação é destruída, ou seja, quando o NestJS encerra a aplicação e libera os recursos.
  onApplicationShutdown(signal?: string) {
    console.log(`finalizando destruição do ciclo de vida da: aplicação, signal: ${signal}`);
  }
}
