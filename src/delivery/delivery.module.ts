import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryEntity } from 'src/delivery/model/delivery.entity';

@Module({
    imports: [
        DeliveryModule,
        TypeOrmModule.forFeature([DeliveryEntity]),
      ],
      controllers: [DeliveryController],
      providers: [DeliveryService],
})
export class DeliveryModule {}
