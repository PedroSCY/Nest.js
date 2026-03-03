import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsuariosController {

    @Get()
    fn(){
        return "Usuarios"
    }
}
