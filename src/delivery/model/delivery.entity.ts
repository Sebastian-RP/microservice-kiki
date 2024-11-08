import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'delivery' })
export class DeliveryEntity{
    @PrimaryGeneratedColumn('uuid')
    id_envio: string;

    @Column({ type: 'varchar', length: 150 })
    destinatario: string;

    @Column({ type: 'varchar', length: 150 })
    remitente: string;

    @Column({ type: 'varchar', length: 240 })
    contenido: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    fecha_envio: Date;

    @Column({ type: 'int'})
    distancia: number;

    @Column({ type: 'float', scale: 1 })
    tarifa: number;
}