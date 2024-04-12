import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title:string

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?:number

    @IsString()
    @IsOptional()
    description?:string
   
    @IsOptional()
    @IsString()
    slug?:string

    @IsInt()  
    @IsPositive()
    @IsOptional()  
    stock?:number

    @IsString({each:true})
    @IsArray()
    sizes:string[]

    @IsIn(['man','women','kid','unisex'])
    gender:string
}
