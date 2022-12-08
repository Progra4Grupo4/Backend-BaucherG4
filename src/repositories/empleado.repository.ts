import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Cuenta} from '../models';
import {CuentaRepository} from './cuenta.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.codigoEmpleado,
  EmpleadoRelations
> {

  public readonly cuentas: HasManyRepositoryFactory<Cuenta, typeof Empleado.prototype.codigoEmpleado>;

  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource, @repository.getter('CuentaRepository') protected cuentaRepositoryGetter: Getter<CuentaRepository>,
  ) {
    super(Empleado, dataSource);
    this.cuentas = this.createHasManyRepositoryFactoryFor('cuentas', cuentaRepositoryGetter,);
    this.registerInclusionResolver('cuentas', this.cuentas.inclusionResolver);
  }
}
