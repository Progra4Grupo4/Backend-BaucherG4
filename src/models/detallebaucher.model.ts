import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Detallebaucher>) {
    super(data);
  }
}

export interface DetallebaucherRelations {
  // describe navigational properties here
}

export type DetallebaucherWithRelations = Detallebaucher & DetallebaucherRelations;
