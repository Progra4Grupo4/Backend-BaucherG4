import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Baucher} from './baucher.model';
import {Cuenta} from './cuenta.model';

@model()
export class Detallebaucher extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  BaucherId?: string;

  @property({
    type: 'string',
    required: true,
  })
  CuentaId: string;

  @property({
    type: 'string',
    required: true,
  })
  Valor: string;

  @belongsTo(() => Baucher)
  baucherId: string;

  @belongsTo(() => Cuenta)
  cuentaId: string;

  constructor(data?: Partial<Detallebaucher>) {
    super(data);
  }
}

export interface DetallebaucherRelations {
  // describe navigational properties here
}

export type DetallebaucherWithRelations = Detallebaucher & DetallebaucherRelations;
