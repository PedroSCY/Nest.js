import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class ComentariosController {

      @Get()
        fn(@Param("id") id: string){
            return `Comentarios do usuario ${id}`
        }
}
