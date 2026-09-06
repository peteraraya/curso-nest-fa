import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CarsModule } from './cars/cars.module.js';
import { BrandsModule } from './brands/brands.module.js';
import { SeedModule } from './seed/seed.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    SeedModule,
    ],
    exports:[],
})
export class AppModule {}
