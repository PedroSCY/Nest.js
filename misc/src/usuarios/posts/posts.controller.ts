import { Controller, Get, Param } from '@nestjs/common';

@Controller(":id")
export class PostsController {

      @Get()
        fn(@Param("id") id:string){
            return `Post ${id} dos Usuarios`
        }
}
