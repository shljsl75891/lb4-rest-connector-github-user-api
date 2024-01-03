import {inject} from '@loopback/core';
import {GithubUsers} from '../services';
import {get, param} from '@loopback/rest';

export class UsersController {
  constructor(
    @inject('services.GithubUsers')
    protected githubUsersService: GithubUsers,
  ) {}

  @get('/user/{username}')
  async getDetails(@param.path.string('username') username: string) {
    return this.githubUsersService.getDetails(username);
  }
}
