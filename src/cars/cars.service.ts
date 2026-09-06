import { BadRequestException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Car } from './interfaces/car.interface.js';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index.js';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Camry', year: '2020' },
    // { id: uuid(), brand: 'Honda', model: 'Civic', year: '2019' },
    // { id: uuid(), brand: 'Ford', model: 'Mustang', year: '2021' },
  ];


  findAll() {
    return this.cars;
  }


  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    // esta condicional es opcional, porque si no existe el id, el servidor responde con un 404
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }


  create(createCarDto: CreateCarDto) {
    const car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }



  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException('car id is not valid');
    }

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = { ...car, ...updateCarDto, id }; // id no se puede actualizar porque es unico en la base de datos
        return carDB;
      }
      return car;

    });
    return carDB;

  }


  delete(id: string) {
    const car = this.findOneById(id);
    // si no existe el id, el servidor responde con un 404
    this.cars = this.cars.filter(car => car.id !== id);
  }


  fillCarsWithSeedData( cars: Car[] ) {

   this.cars = cars;
    
  }



}










