import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {EmpleadoG4, EmpleadoG4Relations, Cuenta, Baucher} from '../models';
import {CuentaRepository} from './cuenta.repository';
import {BaucherRepository} from './baucher.repository';

export class EmpleadoG4Repository extends DefaultCrudRepository<
  EmpleadoG4,
  typeof EmpleadoG4.prototype.id,
  EmpleadoG4Relations
> {

  public readonly cuentas: HasManyRepositoryFactory<Cuenta, typeof EmpleadoG4.prototype.id>;

  public readonly bauchers: HasManyRepositoryFactory<Baucher, typeof EmpleadoG4.prototype.id>;

  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource, @repository.getter('CuentaRepository') protected cuentaRepositoryGetter: Getter<CuentaRepository>, @repository.getter('BaucherRepository') protected baucherRepositoryGetter: Getter<BaucherRepository>,
  ) {
    super(EmpleadoG4, dataSource);
    this.bauchers = this.createHasManyRepositoryFactoryFor('bauchers', baucherRepositoryGetter,);
    this.registerInclusionResolver('bauchers', this.bauchers.inclusionResolver);
    this.cuentas = this.createHasManyRepositoryFactoryFor('cuentas', cuentaRepositoryGetter,);
    this.registerInclusionResolver('cuentas', this.cuentas.inclusionResolver);
  }
}
