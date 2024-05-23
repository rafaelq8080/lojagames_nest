import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdService } from './data/services/prod.service';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    ProdutoModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
