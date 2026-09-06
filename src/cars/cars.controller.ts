import { Controller, Get, Param, Logger, ParseIntPipe, Post, Body, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service.js';
import { CreateCarDto, UpdateCarDto } from './dto/index.js';



@Controller('cars')
export class CarsController {

  private readonly logger = new Logger(CarsController.name);

  constructor(
    private readonly carsService: CarsService
  ){}



  @Get()
  // @UsePipes(ValidationPipe) // validar los datos enviados en todos los endpoints
  getAllCars() {
    return  this.carsService.findAll();
  }

  @Get(':id')  // argumento adicional
  getCarById(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    // aqui se puede agregar el codigo para crear un nuevo modelo de carro
    this.logger.log(createCarDto);
    const newCar = this.carsService.create(createCarDto);
    return newCar;
  }
  
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto) 
  {
    // aqui se puede agregar el codigo para actualizar un modelo de carro
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    // aqui se puede agregar el codigo para eliminar un modelo de carro
    return this.carsService.delete(id);
  }




}


/**
 * Los controladores no manejan la lógica de negocio, sino que se encargan de comunicar con el servicio
 * Los controladores son solo un medio para comunicar con el servicio
 */
