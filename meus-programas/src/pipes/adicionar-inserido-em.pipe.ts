import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AdicionarInseridoEmPipe implements PipeTransform {
  transform(programa: any, metadata: ArgumentMetadata) {
    programa.inseridoEm = new Date()
    return programa;
  }
}
