import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnBDataSource} from '../datasources';
import {Detallebaucher, DetallebaucherRelations} from '../models';

export class DetallebaucherRepository extends DefaultCrudRepository<
  Detallebaucher,
  typeof Detallebaucher.prototype.BaucherId,
  DetallebaucherRelations
> {
  constructor(
    @inject('datasources.ConnB') dataSource: ConnBDataSource,
  ) {
    super(Detallebaucher, dataSource);
  }
}
