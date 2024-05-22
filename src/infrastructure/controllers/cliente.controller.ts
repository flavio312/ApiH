import { Request, Response } from 'express';
import { ClienteUseCase } from '../../application/use-cases/cliente.use-case';
import { ClienteRepositoryImpl } from '../../domain/repositories/cliente.repository.impl'
import { ClienteService } from '../../application/services/cliente.service';
import { Cliente } from '../../domain/entities/cliente.entity';

const clienteRepository = new ClienteRepositoryImpl();
const clienteService = new ClienteService(clienteRepository);
const clienteUseCase = new ClienteUseCase(clienteService);

export const getClientes = async (req: Request, res: Response): Promise<Response> => {
  const clientes = await clienteUseCase.obtenerTodosLosClientes();
  return res.json(clientes);
};

export const getCliente = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const cliente = await clienteUseCase.obtenerClientePorId(Number(id));
  if (cliente) {
    return res.json(cliente);
  } else {
    return res.status(404).json({ message: 'Cliente no encontrado' });
  }
};

export const createCliente = async (req: Request, res: Response): Promise<Response> => {
  const { nombre, apellido, email, teléfono, dirección } = req.body;
  const nuevoCliente = new Cliente();
  nuevoCliente.nombre = nombre;
  nuevoCliente.apellido = apellido;
  nuevoCliente.email = email;
  nuevoCliente.teléfono = teléfono;
  nuevoCliente.dirección = dirección;

  const resultado = await clienteUseCase.crearCliente(nuevoCliente);
  return res.status(201).json(resultado);
};
