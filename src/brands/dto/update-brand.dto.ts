// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto.js';
import { IsString, min, MinLength, minLength } from "class-validator";


// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto {

  
    @IsString()
    @MinLength(1)
    name:string;



}