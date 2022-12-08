import {Entity, model, property} from '@loopback/repository';

@model()
export class Baucher extends Entity {
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
  EmpleadoId: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;


  constructor(data?: Partial<Baucher>) {
    super(data);
  }
}

export interface BaucherRelations {
  // describe navigational properties here
}

export type BaucherWithRelations = Baucher & BaucherRelations;
