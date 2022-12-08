import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ConnB',
  connector: 'mongodb',
  url: 'mongodb://mongo:WHeDFLZ9PmlL1VSf4mny@containers-us-west-114.railway.app:6243/baucher',
  host: 'containers-us-west-114.railway.app:6243/',
  port: 27017,
  user: 'MONGOHOST',
  password: 'containers-us-west-114.railway.app',
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
