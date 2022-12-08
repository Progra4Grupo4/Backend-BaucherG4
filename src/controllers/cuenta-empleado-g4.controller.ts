import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cuenta,
  EmpleadoG4,
} from '../models';
import {CuentaRepository} from '../repositories';

export class CuentaEmpleadoG4Controller {
  constructor(
    @repository(CuentaRepository)
    public cuentaRepository: CuentaRepository,
  ) { }

  @get('/cuentas/{id}/empleado-g4', {
    responses: {
      '200': {
        description: 'EmpleadoG4 belonging to Cuenta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EmpleadoG4)},
          },
        },
      },
    },
  })
  async getEmpleadoG4(
    @param.path.string('id') id: typeof Cuenta.prototype.id,
  ): Promise<EmpleadoG4> {
    return this.cuentaRepository.empleadoG4(id);
  }
}
