import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { Cliente } from '../../domain/entities/cliente.entity';

export class ClienteService {
  constructor(private clienteRepository: ClienteRepository) {}

  async getAllClientes(): Promise<Cliente[]> {
    return await this.clienteRepository.findAll();
  }

  async getClienteById(id: number): Promise<Cliente | null> {
    return await this.clienteRepository.findById(id);
  }

  async createCliente(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }
}
