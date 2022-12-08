import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Detallebaucher} from './detallebaucher.model';
import {EmpleadoG4} from './empleado-g4.model';

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

  @hasMany(() => Detallebaucher)
  detallebauchers: Detallebaucher[];

  @belongsTo(() => EmpleadoG4)
  empleadoG4Id: string;

  constructor(data?: Partial<Baucher>) {
    super(data);
  }
}

export interface BaucherRelations {
  // describe navigational properties here
}

export type BaucherWithRelations = Baucher & BaucherRelations;
