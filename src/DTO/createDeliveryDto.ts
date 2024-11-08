import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDeliveryDto {
    @IsString({ message: 'El campo destinatario debe ser un texto' })
    @IsNotEmpty({ message: 'El campo destinatario es requerido' })
    destinatario: string;

    @IsString({ message: 'El campo remitente debe ser un texto' })
    @IsNotEmpty({ message: 'El campo remitente es requerido' })
    remitente: string;

    @IsString({ message: 'El campo contenido debe ser un texto' })
    @IsNotEmpty({ message: 'El campo contenido es requerido' })
    contenido: string;

    @IsDateString({}, { message: 'La fecha debe tener un formato valido, ejemplo: 2024-11-25' })
    fecha_envio: string;

    @IsNumber({}, { message: 'El campo distancia debe ser un número' })
    @IsNotEmpty({ message: 'El campo distancia es requerido' })
    distancia: number;
}
