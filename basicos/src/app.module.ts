import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudFilmesModule } from './crud-filmes/crud-filmes.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { PipesModule } from './pipes/pipes.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { GuardsModule } from './guards/guards.module';
import { ErrosModule } from './erros/erros.module';

@Module({
  imports: [CrudFilmesModule, MiddlewareModule, PipesModule, InterceptorsModule, GuardsModule, ErrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
