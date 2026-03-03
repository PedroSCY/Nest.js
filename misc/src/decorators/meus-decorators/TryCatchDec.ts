import { HttpException } from "@nestjs/common"

export function TryCatch(){
    return function(
        target:any,
        propriedade:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value

        descriptor.value = function (...args:any[]){
            try{
                return metodoOriginal.apply(this, args)
            } catch(e){
                const msg = `${e.message} em ${propriedade}`
                console.log(msg)
                throw new HttpException(msg, 418)
            }
        }
    }
}