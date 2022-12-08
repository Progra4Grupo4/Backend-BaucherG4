import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  EmpleadoG4,
  Baucher,
} from '../models';
import {EmpleadoG4Repository} from '../repositories';

export class EmpleadoG4BaucherController {
  constructor(
    @repository(EmpleadoG4Repository) protected empleadoG4Repository: EmpleadoG4Repository,
  ) { }

  @get('/empleado-g4s/{id}/bauchers', {
    responses: {
      '200': {
        description: 'Array of EmpleadoG4 has many Baucher',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Baucher)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Baucher>,
  ): Promise<Baucher[]> {
    return this.empleadoG4Repository.bauchers(id).find(filter);
  }

  @post('/empleado-g4s/{id}/bauchers', {
    responses: {
      '200': {
        description: 'EmpleadoG4 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Baucher)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof EmpleadoG4.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Baucher, {
            title: 'NewBaucherInEmpleadoG4',
            exclude: ['id'],
            optional: ['empleadoG4Id']
          }),
        },
      },
    }) baucher: Omit<Baucher, 'id'>,
  ): Promise<Baucher> {
    return this.empleadoG4Repository.bauchers(id).create(baucher);
  }

  @patch('/empleado-g4s/{id}/bauchers', {
    responses: {
      '200': {
        description: 'EmpleadoG4.Baucher PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Baucher, {partial: true}),
        },
      },
    })
    baucher: Partial<Baucher>,
    @param.query.object('where', getWhereSchemaFor(Baucher)) where?: Where<Baucher>,
  ): Promise<Count> {
    return this.empleadoG4Repository.bauchers(id).patch(baucher, where);
  }

  @del('/empleado-g4s/{id}/bauchers', {
    responses: {
      '200': {
        description: 'EmpleadoG4.Baucher DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Baucher)) where?: Where<Baucher>,
  ): Promise<Count> {
    return this.empleadoG4Repository.bauchers(id).delete(where);
  }
}
