import {IsOptional} from "Class-validator";

export class EditarFilmeDto {

  @IsOptional()
  titulo?:string;

  @IsOptional()
  diretor?: string;

  @IsOptional()
  ano?: number;
}
