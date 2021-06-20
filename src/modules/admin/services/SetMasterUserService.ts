import IJSONDBProvider from '@shared/container/providers/JSONDBProvider/models/IJSONDBProvider';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListSelectedGroupsService {
  constructor(
    @inject('JSONDBProvider')
    private jsonDBProvider: IJSONDBProvider,
  ) {}

  public async execute(newMasterUser: string): Promise<string> {
    const allowedUsers = await this.jsonDBProvider.getAllowedUsers();

    const isMasterUserAllowedUser = allowedUsers.find(
      allowedUser => allowedUser === newMasterUser,
    );

    if (!isMasterUserAllowedUser) {
      throw new AppError(
        'Informed master user is not an existing allowed user',
        400,
      );
    }

    await this.jsonDBProvider.setMasterUser(newMasterUser);

    return newMasterUser;
  }
}
