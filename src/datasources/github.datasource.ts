import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './github.datasource.config.json';

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GithubDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'github';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.github', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
