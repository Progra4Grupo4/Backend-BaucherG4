import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ConnB',
  connector: 'mongodb',
  url: 'mongodb+srv://devG4:ControlG4*@cluster0.rlgrors.mongodb.net/baucher',
  host: 'cluster0.rlgrors.mongodb.net/',
  port: 27017,
  user: 'devG4',
  password: 'ControlG4*',
  database: 'baucher',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnBDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ConnB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ConnB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
