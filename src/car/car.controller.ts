import { Controller, Get ,Post,Delete,Put} from '@nestjs/common';
import { Body,Param } from '@nestjs/common/decorators';
import {CarService} from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
    constructor(private carService: CarService){}
    @Get()
    public getCars() {
      return  this.carService.getCars();

    }
    @Post()
    public postCart(@Body() car: CarDto)
    {
        return this.carService.postCar(car);
    }
    @Get(':id')
    public getCarById(@Param('id') id:number)
    {
        return this.carService.getCarById(id);
    }
    @Delete(':id')
    public deleteCarById(@Param('id')id:number)
    {
        return this.carService.deleteCarById(id);

    }
    @Put(':id')
    public updateCarById(@Param('id')id:number,@Body() car: CarDto)
    {
        return this.carService.updateCarById(id,car);
    }
}
