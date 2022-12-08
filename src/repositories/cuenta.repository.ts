import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {Cuenta, CuentaRelations, Empleado, Detallebaucher, EmpleadoG4} from '../models';
import {EmpleadoRepository} from './empleado.repository';
import {DetallebaucherRepository} from './detallebaucher.repository';
import {EmpleadoG4Repository} from './empleado-g4.repository';

export class CuentaRepository extends DefaultCrudRepository<
  Cuenta,
  typeof Cuenta.prototype.id,
  CuentaRelations
> {

  public readonly empleado: BelongsToAccessor<Empleado, typeof Cuenta.prototype.id>;

  public readonly detallebauchers: HasManyRepositoryFactory<Detallebaucher, typeof Cuenta.prototype.id>;

  public readonly empleadoG4: BelongsToAccessor<EmpleadoG4, typeof Cuenta.prototype.id>;

  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>, @repository.getter('DetallebaucherRepository') protected detallebaucherRepositoryGetter: Getter<DetallebaucherRepository>, @repository.getter('EmpleadoG4Repository') protected empleadoG4RepositoryGetter: Getter<EmpleadoG4Repository>,
  ) {
    super(Cuenta, dataSource);
    this.empleadoG4 = this.createBelongsToAccessorFor('empleadoG4', empleadoG4RepositoryGetter,);
    this.registerInclusionResolver('empleadoG4', this.empleadoG4.inclusionResolver);
    this.detallebauchers = this.createHasManyRepositoryFactoryFor('detallebauchers', detallebaucherRepositoryGetter,);
    this.registerInclusionResolver('detallebauchers', this.detallebauchers.inclusionResolver);
    this.empleado = this.createBelongsToAccessorFor('empleado', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
  }
}
