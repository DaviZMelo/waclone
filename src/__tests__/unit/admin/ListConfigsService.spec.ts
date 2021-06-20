import ListConfigsService from '@modules/admin/services/ListConfigsService';
import IConfigsDTO from '@shared/container/providers/JSONDBProvider/dtos/IConfigsDTO';
import FakeJsonDBProvider from '@shared/container/providers/JSONDBProvider/fakes/FakeJSONDBProvider';
import IGroupIDDTO from '@shared/container/providers/WhatsappProvider/dtos/IGroupIDDTO';
import FakeWhatsappProvider from '@shared/container/providers/WhatsappProvider/fakes/FakeWhatsappProvider';

let fakeWhatsappProvider: FakeWhatsappProvider;
let fakeJsonDBProvider: FakeJsonDBProvider;

let listConfigs: ListConfigsService;

describe('ListConfigs', () => {
  beforeEach(() => {
    fakeWhatsappProvider = new FakeWhatsappProvider();
    fakeJsonDBProvider = new FakeJsonDBProvider();
    listConfigs = new ListConfigsService(
      fakeJsonDBProvider,
      fakeWhatsappProvider,
    );
  });

  it('should be able to get configs', async () => {
    await fakeJsonDBProvider.setConfigs({
      cloning: {
        cloningContactsToAddPerDelay: 10,
        cloningDelay: 10,
      },
      links: {
        linkMode: true,
        linkMessage: 'LinkMessage',
      },
      users: {
        masterUser: '5511964945942',
      },
      groups: {
        targetGroupId: 'targetGroupId' as IGroupIDDTO,
        targetGroupLink: 'link',
        hostGroupId: 'hostGroupId' as IGroupIDDTO,
      },
    } as IConfigsDTO);

    const configs = await listConfigs.execute();

    expect(configs).toEqual(
      expect.objectContaining({
        delay: expect.any(Number),
        targetGroup: expect.any(Object),
        hostGroup: expect.any(Object),
        linkMessage: expect.any(String),
        linkMode: expect.any(Boolean),
        numberOfContactsToAddPerDelay: expect.any(Number),
        allFilled: expect.any(Boolean),
      }),
    );
  });

  it('should return "allFilled" false if any required "linkMode" settings have not been set', async () => {
    await fakeJsonDBProvider.setConfigs({
      cloning: {
        cloningContactsToAddPerDelay: 10,
        cloningDelay: 10,
      },
      links: {
        linkMode: true,
      },
      users: {
        masterUser: '5511964945942',
      },
      groups: {
        targetGroupId: 'targetGroupId' as IGroupIDDTO,
        targetGroupLink: 'link',
        hostGroupId: 'hostGroupId' as IGroupIDDTO,
      },
    } as IConfigsDTO);

    const configs = await listConfigs.execute();

    expect(configs.allFilled).toBe(false);
  });
});
