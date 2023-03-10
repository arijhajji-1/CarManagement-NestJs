import { Module } from '@nestjs/common';

import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/car'),
    CarModule],

})
export class AppModule {}
