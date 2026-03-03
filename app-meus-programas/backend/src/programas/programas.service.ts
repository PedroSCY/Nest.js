import { Injectable } from '@nestjs/common';
import { ProgramaRepository } from './data/programaRepository';
import { EditarProgramaDTO } from './dto/editarProgramaDTO';
import { Programa } from './entities/Programa';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ProgramasService {
    constructor(private readonly authService: AuthService){}

    private repository = new ProgramaRepository();

    pegarIdUsuario(email: string){
        return this.authService.pegarUsuarioPorEmail(email).id
    }

    criarPrograma(programa, emailUsuario:string) {
        const idUsuario = this.pegarIdUsuario(emailUsuario)
        return this.repository.criar({...programa, idUsuario: idUsuario});
    }

    buscarProgramas(emailUsuario: string) {
        const id = this.pegarIdUsuario(emailUsuario)
        return this.repository.buscarPorUsuario(id);
    }

    buscarProgramaPorId(id: number, emailUsuario: string) {
        return this.repository.buscarPorId(id, this.pegarIdUsuario(emailUsuario));
    }

    editarPrograma(id: number, programa: EditarProgramaDTO, emailUsuario: string) {
        const antigo = this.buscarProgramaPorId(id, emailUsuario);
        const novo = { ...antigo, ...programa };
        return this.repository.editar(novo, this.pegarIdUsuario(emailUsuario) );
    }

    deletarPrograma(id: number, emailUsuario: string) {
        return this.repository.deletar(id, this.pegarIdUsuario(emailUsuario));
    }
}
