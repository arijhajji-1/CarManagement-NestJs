import { Controller, Get ,Post,Delete,Put} from '@nestjs/common';
import { Body,Param, Query } from '@nestjs/common/decorators';
import {CarService} from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
    constructor(private carService: CarService){}
    @Get()
    public async getCars() {
      return  this.carService.getCars();

    }
    @Post()
    public async postCart(@Body() car: CarDto)
    {
        return this.carService.postCar(car);
    }
    @Get(':id')
    public async getCarById(@Param('id') id:number)
    {
        return this.carService.getCarById(id);
    }
    @Delete(':id')
    public async deleteCarById(@Param('id')id:number)
    {
        return this.carService.deleteCarById(id);

    }
    @Put(':id')
  public async putCarById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.carService.putCarById(id, propertyName, propertyValue);
  }
}
