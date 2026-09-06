import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CarsModule } from './cars/cars.module.js';
import { BrandsModule } from './brands/brands.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    ],
    exports:[],
})
export class AppModule {}
