import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MoedaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const preco = value.preco;
    if (typeof preco !== 'number') {
      throw new Error('O valor deve ser um número');
    }
    const [reais, centavos] = preco.toFixed(2).split('.');
    return {preco: `R$ ${reais},${centavos}`};
  }
}
