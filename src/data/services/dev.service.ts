﻿import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Produto } from "../../produto/entities/produto.entity";


@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            // type: 'mysql',
            // host: 'localhost',
            // port: 3306,
            // username: 'root',
            // password: 'root',
            // database: 'db_lojagames',
            // entities: [Produto, Categoria],
            // synchronize: true,
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'db_lojagames',
            entities: [Produto, Categoria],
            synchronize: true,
    };
  }
}