import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { LogarUsuarioDto } from './dto/logarUsuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post("cadastrar")
    cadastrar(@Body() usuario: CriarUsuarioDto){
        return this.authService.cadastrar(usuario);

    }

    @Post("login")
    login(@Body() usuario : LogarUsuarioDto){
        return this.authService.login(usuario);
    }

}
