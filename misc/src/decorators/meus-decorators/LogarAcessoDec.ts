import { applyDecorators, UseInterceptors } from "@nestjs/common"
import { LogarAcessoInterceptor } from "../logar-acesso/logar-acesso.interceptor"

export function LogarAcessoDec(){
    return applyDecorators(UseInterceptors(LogarAcessoInterceptor))
}