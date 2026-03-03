import { Injectable } from '@nestjs/common';
import { CriarFilmeDto } from './dto/CriarFilmeDTO';
import { EditarFilmeDto } from './dto/EditarFilmeDTO';


@Injectable()
export class CrudFilmesService {
    private filmes = [
        {titulo: "Filme 1", diretor: "Diretor 1", ano: 2020},
        {titulo: "Filme 2", diretor: "Diretor 2", ano: 2021},
        {titulo: "Filme 3", diretor: "Diretor 3", ano: 2022},
    ]
    pegarTodos(invertido: boolean) {
        if (invertido) {
            return this.filmes.slice().reverse();
        }
        return this.filmes;
    }

    criar(NovoFilme: CriarFilmeDto) {
        this.filmes.push(NovoFilme);
        return "Filme criado com sucesso!";
    }

    pegarUm(id: string) {
        return this.filmes[Number(id)];
    }

    atualizarUm(id: string, filmeAtualizado: EditarFilmeDto) {
        const filme = this.filmes[Number(id)];
        const novoFilme = {...filme, ...filmeAtualizado};
        this.filmes[Number(id)] = novoFilme;
        return "Filme atualizado com sucesso!";
    }

    deletarUm(id: string) {
        const filme = this.filmes.splice(Number(id), 1);
        return `${JSON.stringify(filme)} \nFilme deletado com sucesso!`;
    }
}
