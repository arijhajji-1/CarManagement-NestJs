import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './car.mock';
import { CarDto } from './car.dto';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ICar} from './Interfaces/car.interface';
const carProjection = {
    __v: false,
    _id: false,
  };
  
  @Injectable()
  export class CarService {
    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}
  
    public async getCars(): Promise<CarDto[]> {
      const cars = await this.carModel.find({}, carProjection).exec();
      if (!cars || !cars[0]) {
        throw new HttpException('Not Found', 404);
      }
      return cars;
    }
  
    public async postCar(newCar : CarDto) {
      const car = await this.carModel.create(newCar);
      return car.save();
    }
  
    public async getCarById(id: number): Promise<CarDto> {
      const car = await this.carModel.findOne({ id }, carProjection).exec();
      if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return car;
    }
  
    public async deleteCarById(id: number): Promise<CarDto> {
      const car = await this.carModel.deleteOne({ id }).exec();
      if (car.deletedCount === 0) {
        throw new HttpException('Not Found', 404);
      }
    
      return
    }
  
    public async putCarById(
      id: number,
      propertyName: string,
      propertyValue: string,
    ): Promise<CarDto> {
      const car = await this.carModel
        .findOneAndUpdate(
          { id },
          {
            [propertyName]: propertyValue,
          },
        )
        .exec();
      if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return car;
    }
}
