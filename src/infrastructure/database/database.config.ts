import { DataSource } from 'typeorm';
import { Cliente } from '../../domain/entities/cliente.entity';
import { Habitacion } from '../../domain/entities/habitacion.entity';
import { Reserva } from '../../domain/entities/reserva.entity';
import { Pago } from '../../domain/entities/pago.entity';
import { Servicio } from '../../domain/entities/servicio.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'flavio',
  password: 'flavio312',
  database: 'hexagonal',
  synchronize: true,
  logging: false,
  entities: [Cliente, Habitacion, Reserva, Pago, Servicio],
  migrations: [],
  subscribers: [],
});
