import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto.js';
import { UpdateBrandDto } from './dto/update-brand.dto.js';
import { Brand } from './entities/brand.entity.js';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {


  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Audi',
    //   createdAT: new Date().getTime(),
    //   updatedAT: Date.now(),
    // },
    // {
    //   id: uuid(),
    //   name: 'BMW',
    //   createdAT: new Date().getTime(),
    //   updatedAT: Date.now(),
    // },
  ];



  create(createBrandDto: CreateBrandDto) {

    const name = createBrandDto.name;
    if(!name) throw new Error('El campo name es requerido');

    const brand: Brand ={
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAT: new Date().getTime()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    const brands = this.brands;
    return brands;
  }

  findOne(id: string) {
    const brands = this.brands.find((brand) => brand.id === id);
    if(!brands)  throw new Error(`No se encontro el brand con id ${id}`);
    return brands;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAT = new Date().getTime();
        brandDB = {...brandDB, ...updateBrandDto};
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }


    fillBrandsWithSeedData( brands: Brand[] ) {
  
     this.brands = brands;
      
    }
}
