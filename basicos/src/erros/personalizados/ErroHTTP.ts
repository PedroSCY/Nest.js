import { HttpException, HttpStatus } from "@nestjs/common";

export class ErroHTTP extends HttpException {
    constructor(){
        super("Sou um bule", HttpStatus.I_AM_A_TEAPOT)
    }
}