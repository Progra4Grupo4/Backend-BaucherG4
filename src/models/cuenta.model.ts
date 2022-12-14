import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Detallebaucher} from './detallebaucher.model';
import {Empleado} from './empleado.model';

@model()
export class Cuenta extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @belongsTo(() => Empleado)
  empleadoId: string;

  @hasMany(() => Detallebaucher)
  detallebauchers: Detallebaucher[];

  constructor(data?: Partial<Cuenta>) {
    super(data);
  }
}

export interface CuentaRelations {
  // describe navigational properties here
}

export type CuentaWithRelations = Cuenta & CuentaRelations;
