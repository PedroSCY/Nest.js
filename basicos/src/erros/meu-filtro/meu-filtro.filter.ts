import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ErroHTTP } from '../personalizados/ErroHTTP';
import { Erro } from '../personalizados/Erro';

@Catch(Erro, ErroHTTP)
export class MeuFiltroFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const logger = new Logger(MeuFiltroFilter.name);
    const resposta = host.switchToHttp().getResponse();
    logger.error(exception);
    resposta.status(HttpStatus.I_AM_A_TEAPOT).json({
      mensagem: 'Não é possível completar a requisição',
      complemento: `${exception}`,
      codigo: HttpStatus.I_AM_A_TEAPOT,
    });
  }
}
