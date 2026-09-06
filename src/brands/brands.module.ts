import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service.js';
import { BrandsController } from './brands.controller.js';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
