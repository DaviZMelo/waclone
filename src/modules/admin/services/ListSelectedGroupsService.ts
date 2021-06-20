import IJSONDBProvider from '@shared/container/providers/JSONDBProvider/models/IJSONDBProvider';
import { inject, injectable } from 'tsyringe';

interface IResponse {
  selectedTargetGroupId: string;
  selectedHostGroupId: string;
}

@injectable()
export default class ListSelectedGroupsService {
  constructor(
    @inject('JSONDBProvider')
    private jsonDBProvider: IJSONDBProvider,
  ) {}

  public async execute(): Promise<IResponse> {
    const selectedTargetGroupId = await this.jsonDBProvider.getTargetGroupId();
    const selectedHostGroupId = await this.jsonDBProvider.getHostGroupId();

    return {
      selectedTargetGroupId,
      selectedHostGroupId,
    };
  }
}
