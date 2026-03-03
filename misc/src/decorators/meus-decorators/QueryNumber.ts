import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";

export const QueryNumber = createParamDecorator(
    (nomeDoParametro: any, ctx: ExecutionContext) =>{
        const requisicao = ctx.switchToHttp().getRequest()
        const valor = requisicao.query[nomeDoParametro]
        const valorConvertido = Number(valor)
        if(isNaN(valorConvertido)){
            throw new HttpException(`${nomeDoParametro} não é um numero`, HttpStatus.BAD_REQUEST)
        }
        return valorConvertido
})