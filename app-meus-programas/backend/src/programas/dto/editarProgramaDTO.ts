import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditarProgramaDTO {

    @IsOptional()
    @IsString({ message: 'O nome deve ser uma string' })
    nome?: string;

    @IsOptional()
    @IsString({ message: 'O site deve ser uma string' })
    site?: string;

    @IsOptional()
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao?: string;

    @IsOptional()
    @IsString({ message: 'A categoria deve ser uma string' })
    categoria?: string;

    @IsOptional()
    @IsBoolean({ message: 'O campo gratuito deve ser um booleano' })
    gratuito?: boolean;

    @IsOptional()
    Comentarios?: string;
}