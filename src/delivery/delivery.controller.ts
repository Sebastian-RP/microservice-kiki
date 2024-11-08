import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from 'src/DTO/createDeliveryDto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get('getAllDeliveries')
  getAllDeliveries(): Promise<DeliveryInterface[]> {
    return this.deliveryService.getAllDeliveries();
  }

  @Post('newDelivery')
  async createDelivery(@Body() createDeliveryDto: CreateDeliveryDto): Promise<DeliveryInterface> {
    return this.deliveryService.createDelivery(createDeliveryDto);
  }
}
