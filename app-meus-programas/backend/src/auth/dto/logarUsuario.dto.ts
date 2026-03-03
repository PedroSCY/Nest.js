import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LogarUsuarioDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
}