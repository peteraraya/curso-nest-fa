import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';
import { CarsModule } from '../cars/cars.module.js';
import { BrandsModule } from '../brands/brands.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    CarsModule,
    BrandsModule,
  ],
})
export class SeedModule {}
