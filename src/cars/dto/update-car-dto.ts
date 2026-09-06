import { IsInt, IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id? : string;

    @IsString()
    @IsOptional()
    readonly brand? : string;

    @IsString()
    @IsOptional()
    readonly model? : string;

    @IsString()
    @IsOptional()
    readonly year? : string;

} 


// Los dtos siempre son clases, es como queremos mover la lógica de validación de los datos