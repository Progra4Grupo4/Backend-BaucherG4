import {Entity, hasMany, model, property} from '@loopback/repository';
import {Baucher} from './baucher.model';
import {Cuenta} from './cuenta.model';

@model()
export class EmpleadoG4 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  sueldo: string;

  @hasMany(() => Cuenta)
  cuentas: Cuenta[];

  @hasMany(() => Baucher)
  bauchers: Baucher[];

  constructor(data?: Partial<EmpleadoG4>) {
    super(data);
  }
}

export interface EmpleadoG4Relations {
  // describe navigational properties here
}

export type EmpleadoG4WithRelations = EmpleadoG4 & EmpleadoG4Relations;
