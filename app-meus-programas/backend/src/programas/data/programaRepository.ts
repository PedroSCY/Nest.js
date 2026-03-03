import { Programa } from '../entities/Programa';

export class ProgramaRepository {
    private programas: any[] = [
        {
  nome: 'GIMP',
  site: 'https://www.gimp.org',
  descricao: 'GIMP é um editor de imagens gratuito e de código aberto.',
  categoria: 'UTILITARIO',
  gratuito: true,
  comentarios: 'Tem me ajudado bastante a editar imagens.',
  inseridoEm: new Date(),
  id: 0,
  idUsuario: 1000
},
{
  nome: 'LibreOffice',
  site: 'https://www.libreoffice.org',
  descricao: 'LibreOffice é uma suíte de escritório gratuita e de código aberto.',
  categoria: 'UTILITARIO',
  gratuito: true,
  comentarios: 'Uso o LibreOffice para todas as minhas necessidades de escritório.',
  inseridoEm: new Date(),
  id: 2,
  idUsuario: 1001
},
{
  nome: 'VLC Media Player',
  site: 'https://www.videolan.org/vlc/',
  descricao: 'VLC é um reprodutor multimídia gratuito e de código aberto.',
  categoria: 'MULTIMIDIA',
  gratuito: true,
  comentarios: 'VLC é ótimo para reproduzir qualquer tipo de mídia.',
  inseridoEm: new Date(),
  id: 4,
  idUsuario: 1001
}
    ];
    private proximoId = 5;

    criar(programa) {
        return this.programas.push({ ...programa, id: this.proximoId++ });
    }

    buscarPorId(id, idUsuario: number) {
        return this.programas.find((programa) => programa.id === id && programa.idUsuario === idUsuario);
    }

    buscarPorUsuario(idUsuario: number){
        return this.programas.filter((programa) => programa.idUsuario === idUsuario)
    }

    buscarTodos() {
        return this.programas;
    }

    editar(programa: Programa, idUsuario: number) {
        return (this.programas[this.buscarIndex(programa.id,idUsuario)] = programa);
    }

    deletar(id, idUsuario: number) {
        return this.programas.splice(this.buscarIndex(id,idUsuario), 1);
    }

    private buscarIndex(id: number, idUsuario: number) {
        return this.programas.findIndex((programa) => programa.id === id && programa.idUsuario === idUsuario);
    }
}
