import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('env')
export class EnvController {
    constructor(private readonly configService: ConfigService){}
    
    @Get("/var1")
    var1(){
        return this.configService.get("VAR1")
    }
   
    @Get("/var2")
    var2(){
        return this.configService.get("VAR2")
    }
}
