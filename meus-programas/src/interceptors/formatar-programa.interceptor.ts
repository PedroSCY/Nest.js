import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

function formatarPrograma(programa: any) {
    const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(programa.inseridoEm);
    return { ...programa, inseridoEm: dataFormatada, gratuito: programa.gratuito? "Sim" : "Não" };
}

@Injectable()
export class FormatarProgramaInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return new Observable((observer) => {
            next.handle().subscribe({
                next: (dadosParaFormatar) => {
                    if(Array.isArray(dadosParaFormatar)) {
                      const dadosFinais = dadosParaFormatar.map(formatarPrograma)
                      observer.next(dadosFinais);
                    }else {
                      observer.next(formatarPrograma(dadosParaFormatar));
                    }
                    observer.complete();
                },
            });
        });
    }
}
