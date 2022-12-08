import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Baucher,
  EmpleadoG4,
} from '../models';
import {BaucherRepository} from '../repositories';

export class BaucherEmpleadoG4Controller {
  constructor(
    @repository(BaucherRepository)
    public baucherRepository: BaucherRepository,
  ) { }

  @get('/bauchers/{id}/empleado-g4', {
    responses: {
      '200': {
        description: 'EmpleadoG4 belonging to Baucher',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EmpleadoG4)},
          },
        },
      },
    },
  })
  async getEmpleadoG4(
    @param.path.string('id') id: typeof Baucher.prototype.id,
  ): Promise<EmpleadoG4> {
    return this.baucherRepository.empleadoG4(id);
  }
}
