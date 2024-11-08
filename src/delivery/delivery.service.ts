import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Constants } from 'src/delivery/constants/constants';
import { CreateDeliveryDto } from 'src/delivery/dto/createDeliveryDto';
import { DeliveryEntity } from 'src/delivery/model/delivery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(DeliveryEntity)
        private readonly repo: Repository<DeliveryEntity>
    ) {}

    public async getAllDeliveries(): Promise<DeliveryInterface[]> {
        return await this.repo.find();
    }

    public async createDelivery(dataNewDelivery: CreateDeliveryDto): Promise<DeliveryInterface> {
        const distancia = Math.ceil(dataNewDelivery.distancia);
        const { destinatario, remitente, contenido, fecha_envio } = dataNewDelivery;

        let tarifa: number = Constants.BASE_PRICE + (distancia * Constants.COST_PER_KILOMETER);
        tarifa = Math.ceil(tarifa * 100) / 100; //reducimos a maximo 2 decimales el resultado
        
        const delivery = this.repo.create({
            destinatario,
            remitente,
            contenido,
            fecha_envio: new Date(fecha_envio),
            distancia,
            tarifa
        });

        return await this.repo.save(delivery);
    }
}
