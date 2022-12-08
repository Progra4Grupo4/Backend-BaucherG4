import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cuenta} from './cuenta.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  codigoEmpleado?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'number',
    required: true,
  })
  sueldo: number;

  @hasMany(() => Cuenta)
  cuentas: Cuenta[];

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
