import { Programa } from '../entities/Programa';

export class ProgramaRepository {
    private programas: Programa[] = [];
    private proximoId = 0;

    criar(programa) {
        return this.programas.push({ ...programa, id: this.proximoId++, idUsuario: 0 });
    }

    buscarPorId(id) {
        return this.programas.find((programa) => programa.id === id);
    }

    buscarTodos() {
        return this.programas;
    }

    editar(programa: Programa) {
        return (this.programas[this.buscarIndex(programa.id)] = programa);
    }

    deletar(id) {
        return this.programas.splice(this.buscarIndex(id), 1);
    }

    private buscarIndex(id: number) {
        return this.programas.findIndex((programa) => programa.id === id);
    }
}
