import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {Detallebaucher, DetallebaucherRelations, Baucher, Cuenta} from '../models';
import {BaucherRepository} from './baucher.repository';
import {CuentaRepository} from './cuenta.repository';

export class DetallebaucherRepository extends DefaultCrudRepository<
  Detallebaucher,
  typeof Detallebaucher.prototype.BaucherId,
  DetallebaucherRelations
> {

  public readonly baucher: BelongsToAccessor<Baucher, typeof Detallebaucher.prototype.BaucherId>;

  public readonly cuenta: BelongsToAccessor<Cuenta, typeof Detallebaucher.prototype.BaucherId>;

  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource, @repository.getter('BaucherRepository') protected baucherRepositoryGetter: Getter<BaucherRepository>, @repository.getter('CuentaRepository') protected cuentaRepositoryGetter: Getter<CuentaRepository>,
  ) {
    super(Detallebaucher, dataSource);
    this.cuenta = this.createBelongsToAccessorFor('cuenta', cuentaRepositoryGetter,);
    this.registerInclusionResolver('cuenta', this.cuenta.inclusionResolver);
    this.baucher = this.createBelongsToAccessorFor('baucher', baucherRepositoryGetter,);
    this.registerInclusionResolver('baucher', this.baucher.inclusionResolver);
  }
}
