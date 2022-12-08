import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EmpleadoG4} from '../models';
import {EmpleadoG4Repository} from '../repositories';

export class EmpleadoG4Controller {
  constructor(
    @repository(EmpleadoG4Repository)
    public empleadoG4Repository : EmpleadoG4Repository,
  ) {}

  @post('/empleado-g4')
  @response(200, {
    description: 'EmpleadoG4 model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmpleadoG4)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadoG4, {
            title: 'NewEmpleadoG4',
            exclude: ['id'],
          }),
        },
      },
    })
    empleadoG4: Omit<EmpleadoG4, 'id'>,
  ): Promise<EmpleadoG4> {
    return this.empleadoG4Repository.create(empleadoG4);
  }

  @get('/empleado-g4/count')
  @response(200, {
    description: 'EmpleadoG4 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmpleadoG4) where?: Where<EmpleadoG4>,
  ): Promise<Count> {
    return this.empleadoG4Repository.count(where);
  }

  @get('/empleado-g4')
  @response(200, {
    description: 'Array of EmpleadoG4 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmpleadoG4, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmpleadoG4) filter?: Filter<EmpleadoG4>,
  ): Promise<EmpleadoG4[]> {
    return this.empleadoG4Repository.find(filter);
  }

  @patch('/empleado-g4')
  @response(200, {
    description: 'EmpleadoG4 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadoG4, {partial: true}),
        },
      },
    })
    empleadoG4: EmpleadoG4,
    @param.where(EmpleadoG4) where?: Where<EmpleadoG4>,
  ): Promise<Count> {
    return this.empleadoG4Repository.updateAll(empleadoG4, where);
  }

  @get('/empleado-g4/{id}')
  @response(200, {
    description: 'EmpleadoG4 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmpleadoG4, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(EmpleadoG4, {exclude: 'where'}) filter?: FilterExcludingWhere<EmpleadoG4>
  ): Promise<EmpleadoG4> {
    return this.empleadoG4Repository.findById(id, filter);
  }

  @patch('/empleado-g4/{id}')
  @response(204, {
    description: 'EmpleadoG4 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpleadoG4, {partial: true}),
        },
      },
    })
    empleadoG4: EmpleadoG4,
  ): Promise<void> {
    await this.empleadoG4Repository.updateById(id, empleadoG4);
  }

  @put('/empleado-g4/{id}')
  @response(204, {
    description: 'EmpleadoG4 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() empleadoG4: EmpleadoG4,
  ): Promise<void> {
    await this.empleadoG4Repository.replaceById(id, empleadoG4);
  }

  @del('/empleado-g4/{id}')
  @response(204, {
    description: 'EmpleadoG4 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.empleadoG4Repository.deleteById(id);
  }
}
