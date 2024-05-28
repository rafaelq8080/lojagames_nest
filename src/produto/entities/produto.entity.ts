import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_produtos" })
export class Produto {

    @ApiProperty() 
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number

    @ApiProperty() 
    @Column()
    foto: string

    @ApiProperty({ type: () => Categoria }) 
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}
