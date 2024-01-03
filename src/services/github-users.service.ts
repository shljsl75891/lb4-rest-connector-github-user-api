import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {GithubDataSource} from '../datasources';
import {AnyObject} from '@loopback/repository';

export interface GithubUsers {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getDetails(username: string): Promise<AnyObject>;
}

export class GithubUsersProvider implements Provider<GithubUsers> {
  constructor(
    // github must match the name property in the datasource json file
    @inject('datasources.github')
    protected dataSource: GithubDataSource = new GithubDataSource(),
  ) {}

  value(): Promise<GithubUsers> {
    return getService(this.dataSource);
  }
}
