import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin/admin.guard';

@Controller('guards')
export class GuardsController {

    @Get()
    @UseGuards(AdminGuard)
    fn(){
        return "Tudo certo, você tem acesso!"
    }
}
