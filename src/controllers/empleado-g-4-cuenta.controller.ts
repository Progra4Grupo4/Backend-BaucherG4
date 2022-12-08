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
  Cuenta,
} from '../models';
import {EmpleadoG4Repository} from '../repositories';

export class EmpleadoG4CuentaController {
  constructor(
    @repository(EmpleadoG4Repository) protected empleadoG4Repository: EmpleadoG4Repository,
  ) { }

  @get('/empleado-g4s/{id}/cuentas', {
    responses: {
      '200': {
        description: 'Array of EmpleadoG4 has many Cuenta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cuenta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cuenta>,
  ): Promise<Cuenta[]> {
    return this.empleadoG4Repository.cuentas(id).find(filter);
  }

  @post('/empleado-g4s/{id}/cuentas', {
    responses: {
      '200': {
        description: 'EmpleadoG4 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cuenta)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof EmpleadoG4.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuenta, {
            title: 'NewCuentaInEmpleadoG4',
            exclude: ['id'],
            optional: ['empleadoG4Id']
          }),
        },
      },
    }) cuenta: Omit<Cuenta, 'id'>,
  ): Promise<Cuenta> {
    return this.empleadoG4Repository.cuentas(id).create(cuenta);
  }

  @patch('/empleado-g4s/{id}/cuentas', {
    responses: {
      '200': {
        description: 'EmpleadoG4.Cuenta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuenta, {partial: true}),
        },
      },
    })
    cuenta: Partial<Cuenta>,
    @param.query.object('where', getWhereSchemaFor(Cuenta)) where?: Where<Cuenta>,
  ): Promise<Count> {
    return this.empleadoG4Repository.cuentas(id).patch(cuenta, where);
  }

  @del('/empleado-g4s/{id}/cuentas', {
    responses: {
      '200': {
        description: 'EmpleadoG4.Cuenta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cuenta)) where?: Where<Cuenta>,
  ): Promise<Count> {
    return this.empleadoG4Repository.cuentas(id).delete(where);
  }
}
