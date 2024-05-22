import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Habitaciones')
export class Habitacion {
  @PrimaryGeneratedColumn()
  id_habitación!: number;

  @Column()
  número_habitación!: number;

  @Column()
  tipo!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_por_noche!: number;

  @Column()
  estado!: string;
}
