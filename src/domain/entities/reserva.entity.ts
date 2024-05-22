import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Habitacion } from './habitacion.entity';

@Entity('Reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id_reserva!: number;

  @Column()
  id_cliente!: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente!: Cliente;

  @Column()
  id_habitación!: number;

  @ManyToOne(() => Habitacion)
  @JoinColumn({ name: 'id_habitación' })
  habitacion!: Habitacion;

  @Column('date')
  fecha_entrada!: string;

  @Column('date')
  fecha_salida!: string;

  @Column()
  estado!: string;
}
