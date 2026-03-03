import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { PostsModule } from './posts/posts.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { RouterModule } from '@nestjs/core';

@Module({
  controllers: [UsuariosController],
  imports: [
    PostsModule,
    ComentariosModule,
    RouterModule.register([
      {
        path: 'usuarios',
        module: UsuariosModule,
        children: [
          {
            path: 'posts',
            module: PostsModule,
          },
          {
            path: ':id/comentarios',
            module: ComentariosModule,
          },
        ],
      },
    ]),
  ],
})
export class UsuariosModule {}
