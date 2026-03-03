import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors) => {
                const propsComProblema = errors.map((erro) => erro.property);
                const mensagem = `Programa invalido. Propriedades faltando ou incorretas: ${propsComProblema.join(', ')}`;
                return new BadRequestException(mensagem);
            },
            stopAtFirstError: true,
            whitelist:true, // impede que propriedades que não estão definidas no DTO sejam aceitas
        }),
    );
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
