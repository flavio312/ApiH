import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../../domain/entities/cliente.entity';

export class ClienteUseCase {
  constructor(private clienteService: ClienteService) {}

  async obtenerTodosLosClientes(): Promise<Cliente[]> {
    return await this.clienteService.getAllClientes();
  }

  async obtenerClientePorId(id: number): Promise<Cliente | null> {
    return await this.clienteService.getClienteById(id);
  }

  async crearCliente(cliente: Cliente): Promise<Cliente> {
    return await this.clienteService.createCliente(cliente);
  }
}
