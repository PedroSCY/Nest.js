import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Programa {

    @IsNumber({}, { message: 'O id deve ser um número' })
    id: number

    @IsNotEmpty()
    @IsString({ message: 'O nome deve ser uma string' })
    nome: string;

    @IsNotEmpty()
    @IsString({ message: 'O site deve ser uma string' })
    site: string;

    @IsNotEmpty()
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao: string;

    @IsNotEmpty()
    @IsString({ message: 'A categoria deve ser uma string' })
    categoria: string;

    @IsNotEmpty()
    @IsBoolean({ message: 'O campo gratuito deve ser um booleano' })
    gratuito: boolean;

    @IsOptional()
    comentarios?: string;

    @IsNotEmpty()
    inseridoEm: Date;

    @IsNotEmpty()
    idUsuario: number;

    
}
