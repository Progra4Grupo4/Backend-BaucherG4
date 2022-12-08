import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {Baucher, BaucherRelations, Detallebaucher, EmpleadoG4} from '../models';
import {DetallebaucherRepository} from './detallebaucher.repository';
import {EmpleadoG4Repository} from './empleado-g4.repository';

export class BaucherRepository extends DefaultCrudRepository<
  Baucher,
  typeof Baucher.prototype.id,
  BaucherRelations
> {

  public readonly detallebauchers: HasManyRepositoryFactory<Detallebaucher, typeof Baucher.prototype.id>;

  public readonly empleadoG4: BelongsToAccessor<EmpleadoG4, typeof Baucher.prototype.id>;

  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource, @repository.getter('DetallebaucherRepository') protected detallebaucherRepositoryGetter: Getter<DetallebaucherRepository>, @repository.getter('EmpleadoG4Repository') protected empleadoG4RepositoryGetter: Getter<EmpleadoG4Repository>,
  ) {
    super(Baucher, dataSource);
    this.empleadoG4 = this.createBelongsToAccessorFor('empleadoG4', empleadoG4RepositoryGetter,);
    this.registerInclusionResolver('empleadoG4', this.empleadoG4.inclusionResolver);
    this.detallebauchers = this.createHasManyRepositoryFactoryFor('detallebauchers', detallebaucherRepositoryGetter,);
    this.registerInclusionResolver('detallebauchers', this.detallebauchers.inclusionResolver);
  }
}
