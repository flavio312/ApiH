import { Cliente } from '../entities/cliente.entity';

export interface ClienteRepository {
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente | null>;
  save(cliente: Cliente): Promise<Cliente>;
}
