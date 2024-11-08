import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  
    @ApiProperty({
        description: 'El destinatario del envío',
        example: 'Juan Pérez',
    })
    @IsString({ message: 'El campo destinatario debe ser un texto' })
    @IsNotEmpty({ message: 'El campo destinatario es requerido' })
    destinatario: string;

    @ApiProperty({
        description: 'El remitente del envío',
        example: 'Maria López',
    })
    @IsString({ message: 'El campo remitente debe ser un texto' })
    @IsNotEmpty({ message: 'El campo remitente es requerido' })
    remitente: string;

    @ApiProperty({
        description: 'El contenido del paquete que se va a enviar',
        example: 'Ropa',
    })
    @IsString({ message: 'El campo contenido debe ser un texto' })
    @IsNotEmpty({ message: 'El campo contenido es requerido' })
    contenido: string;

    @ApiProperty({
        description: 'La fecha en la que se realiza el envío (formato ISO)',
        example: '2024-11-25',
    })
    @IsDateString({}, { message: 'La fecha debe tener un formato valido, ejemplo: 2024-11-25' })
    fecha_envio: string;

    @ApiProperty({
        description: 'La distancia en kilómetros entre el remitente y el destinatario',
        example: 150,
    })
    @IsNumber({}, { message: 'El campo distancia debe ser un número' })
    @IsNotEmpty({ message: 'El campo distancia es requerido' })
    distancia: number;
}
