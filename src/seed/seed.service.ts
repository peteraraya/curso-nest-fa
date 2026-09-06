import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed.js';
import { BRANDS_SEED } from './data/brands.seed.js';
import { CarsService } from '../cars/cars.service.js';
import { BrandsService } from '../brands/brands.service.js';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB(){

    // CARS_SEED.forEach(car => this.carsService.create(car));
    // BRANDS_SEED.forEach(brand => this.brandsService.create(brand));
    
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'SEED executed';
  }


}
