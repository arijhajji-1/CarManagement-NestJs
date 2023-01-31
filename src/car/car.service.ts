import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './car.mock';
@Injectable()
export class CarService {
    private cars = CARS;
    public  getCars()
    {
        return this.cars;
    }
    public  postCar(car)
    {
        return this.cars.push(car);
    }
    public  getCarById(id:number)
    { const car = this.cars.find(car => car.id == id);
        if(car)
        {
            throw new HttpException('Not Found',404);
        }
        return car;
    }
    public  deleteCarById(id:number)
    { const index = this.cars.findIndex(car => car.id == id);
        if(index)
        {
            throw new HttpException('Not Found',404);
        }
        this.cars.splice(index,1)
        return this.cars;
    }
    public  updateCarById(id:number,car)
    { const index = this.cars.findIndex(car => car.id == id);
        if(index)
        {
            throw new HttpException('Not Found',404);
        }
        this.cars[index] = car;
        return this.cars;

    }
    
}
