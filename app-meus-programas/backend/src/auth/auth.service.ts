import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { LogarUsuarioDto } from './dto/logarUsuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    usuarios = [
        {"nome":"Pedro","email":"pedro@mail.com","senha":"123456","id":1000},
        {"nome":"Ana","email":"ana@mail.com","senha":"123456","id":1001}
    ];
    proximoId = 1002;

    cadastrar(usuario: CriarUsuarioDto){
        return this.usuarios.push(
            {...usuario, id: this.proximoId++}
        );
        
    }

    buscarTodos(){
        return this.usuarios;
    }

    login(usuario: LogarUsuarioDto){
        const {email, senha} = usuario

        const usuarioApp = this.usuarios.find(usuario => usuario.email === email)

        if(!usuarioApp || usuarioApp?.senha !== senha){
            throw new UnauthorizedException() 
        }

        const payload = {email: usuarioApp.email}

        return {
            nome: usuarioApp.nome,
            email: usuarioApp.email,
            token: this.jwtService.sign(payload)
        }

    }

    pegarUsuarioPorEmail(email:string){
        return this.usuarios.find((usuario) => usuario.email === email)
    }

}
