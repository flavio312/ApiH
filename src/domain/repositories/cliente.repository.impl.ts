import { Repository } from 'typeorm';
import { AppDataSource } from '../../infrastructure/database/database.config'
import { Cliente } from '../../domain/entities/cliente.entity';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';

export class ClienteRepositoryImpl implements ClienteRepository {
  private repository: Repository<Cliente>;

  constructor() {
    this.repository = AppDataSource.getRepository(Cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Cliente | null> {
    return await this.repository.findOneBy({ id_cliente: id });
  }

  async save(cliente: Cliente): Promise<Cliente> {
    return await this.repository.save(cliente);
  }
}
