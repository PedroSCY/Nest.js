import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidarEmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)){
        throw new BadRequestException('Email inválido');
    }
    return value;
  }
}
