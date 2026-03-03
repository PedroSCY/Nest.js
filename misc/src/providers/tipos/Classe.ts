import { Injectable } from "@nestjs/common";

@Injectable()
export class MinhaClasse{
    fn(){
        return {tipo:"Classe", mensagem: "Isso veio de uma classe"}
    }
}