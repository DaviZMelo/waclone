import IGroupIDDTO from '@shared/container/providers/WhatsappProvider/dtos/IGroupIDDTO';
import IJSONDBProvider from '@shared/container/providers/JSONDBProvider/models/IJSONDBProvider';
import { inject, injectable } from 'tsyringe';
import IWhatsappProvider from '@shared/container/providers/WhatsappProvider/models/IWhatsappProvider';

interface IGroupInfo {
  id: IGroupIDDTO;
  title: string;
}

interface IConfigs {
  delay: number;
  targetGroup: IGroupInfo;
  hostGroup: IGroupInfo;
  linkMessage: string;
  linkMode: boolean;
  numberOfContactsToAddPerDelay: number;
  allFilled: boolean;
}

@injectable()
export default class ListConfigsService {
  constructor(
    @inject('JSONDBProvider')
    private jsonDBProvider: IJSONDBProvider,

    @inject('WhatsappProvider')
    private whatsappProvider: IWhatsappProvider,
  ) {}

  public async execute(): Promise<IConfigs> {
    let allFilled = false;

    const {
      cloning,
      groups,
      links,
      users,
    } = await this.jsonDBProvider.getConfigs();

    const {
      title: targetGroupTitle,
    } = await this.whatsappProvider.getGroupInfo(groups.targetGroupId);

    const { title: hostGroupTitle } = await this.whatsappProvider.getGroupInfo(
      groups.hostGroupId,
    );

    if (
      cloning.cloningDelay &&
      cloning.cloningContactsToAddPerDelay &&
      users.masterUser &&
      groups.hostGroupId &&
      groups.targetGroupId
    ) {
      allFilled = true;
    }

    if (
      (links.linkMode && !links.linkMessage) ||
      (links.linkMode && !groups.targetGroupId) ||
      (links.linkMode && !groups.targetGroupLink)
    ) {
      allFilled = false;
    }

    const configs = {
      delay: cloning.cloningDelay,
      targetGroup: {
        id: groups.targetGroupId,
        title: targetGroupTitle,
      },
      hostGroup: {
        id: groups.hostGroupId,
        title: hostGroupTitle,
      },
      linkMessage: links.linkMessage,
      linkMode: links.linkMode,
      numberOfContactsToAddPerDelay: cloning.cloningContactsToAddPerDelay,
      allFilled,
    };

    return configs;
  }
}
