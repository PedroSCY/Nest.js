import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LogarAcessoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requisicao = context.switchToHttp().getRequest()
    const {method, originalUrl} = requisicao

    console.log(`${originalUrl} foi acessada com o método ${method} `)
    return next.handle();
  }
}
