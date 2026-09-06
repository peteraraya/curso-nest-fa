import { IsInt, IsString, MinLength } from "class-validator";


export class CreateCarDto {

    @IsString({ message: 'The brand must be a string' })
    readonly brand: string;
    @IsString()
    @MinLength(3, { message: 'The model must be at least 3 characters long' })
    readonly model: string;
    @IsString()
    readonly year: string;

} 


// Los dtos siempre son clases, es como queremos mover la lógica de validación de los datos