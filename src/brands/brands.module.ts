import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service.js';
import { BrandsController } from './brands.controller.js';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
})
export class BrandsModule {}
