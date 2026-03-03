export class Notificador{
    constructor(private readonly tipo:"email" | "sms"){}

    notificar(mensagem:string, destinatario:string){
        return `Mensagem "${mensagem}" foi enviada para ${destinatario} via ${this.tipo}`
    }
}