import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  email!: string;

  @Column()
  teléfono!: string;

  @Column()
  dirección!: string;
}
