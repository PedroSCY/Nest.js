import { Injectable } from '@nestjs/common';
import { ProgramaRepository } from './data/programaRepository';
import { EditarProgramaDTO } from './dto/editarProgramaDTO';
import { Programa } from './entities/Programa';

@Injectable()
export class ProgramasService {
    private repository = new ProgramaRepository();

    criarPrograma(programa) {
        this.repository.criar(programa);
        return 'Programa criado com sucesso!';
    }

    buscarProgramas() {
        return this.repository.buscarTodos();
    }

    buscarProgramaPorId(id: number) {
        return this.repository.buscarPorId(id);
    }

    editarPrograma(id: number, programa: EditarProgramaDTO) {
        const antigo = this.buscarProgramaPorId(id);
        const novo = { ...antigo, ...programa };
        return this.repository.editar(novo);
    }

    deletarPrograma(id: number) {
        const deletado: Programa[] = this.repository.deletar(id);
        return `Programa ${deletado[0].nome} foi deletado com sucesso!`;
    }
}
