import {IsString, IsNotEmpty, Length, IsNumber} from "Class-validator"
export class CriarFilmeDto {
  @IsNotEmpty()
  @IsString({message: "O título deve ser uma string"})
  @Length(3, 20, {message: "O título deve ter entre 3 e 20 caracteres"})
  titulo:string;

  @IsNotEmpty()
  @IsString({message: "O diretor deve ser uma string"})
  @Length(3, 20, {message: "O diretor deve ter entre 3 e 20 caracteres"})
  diretor: string;

  @IsNotEmpty()
  @IsNumber({}, {message: "O ano deve ser um número"})
  ano: number;
}
