import StartCloningService from '@modules/admin/services/StartCloningService';

import FakeJsonDBProvider from '@shared/container/providers/JSONDBProvider/fakes/FakeJSONDBProvider';
import FakeWhatsappProvider from '@shared/container/providers/WhatsappProvider/fakes/FakeWhatsappProvider';
import FakeJobsProvider from '@shared/container/providers/JobsProvider/fakes/FakeJobsProvider';
import LogError from '@shared/errors/LogError';

let fakeJsonDBProvider: FakeJsonDBProvider;
let fakeWhatsappProvider: FakeWhatsappProvider;
let fakeJobsProvider: FakeJobsProvider;

let startCloning: StartCloningService;

describe('StartCloning', () => {
  beforeEach(() => {
    fakeJsonDBProvider = new FakeJsonDBProvider();
    fakeWhatsappProvider = new FakeWhatsappProvider();
    fakeJobsProvider = new FakeJobsProvider();
    startCloning = new StartCloningService(
      fakeJsonDBProvider,
      fakeWhatsappProvider,
      fakeJobsProvider,
    );
  });

  it('should be able to start group cloning', async () => {
    await fakeJsonDBProvider.setConfigs({
      links: {
        linkMode: false,
      },
      cloning: {
        cloningContactsToAddPerDelay: 1,
        cloningDelay: 10,
        cloningContacts: ['5511964945942@c.us'],
      },
    });

    const addParticipantFunction = jest.spyOn(
      fakeWhatsappProvider,
      'addParticipant',
    );

    await startCloning.execute();

    expect(addParticipantFunction).toHaveBeenCalled();
  });

  it('should be able to start group cloning with link mode', async () => {
    await fakeJsonDBProvider.setConfigs({
      links: {
        linkMode: true,
      },
      cloning: {
        cloningContactsToAddPerDelay: 1,
        cloningDelay: 10,
        cloningContacts: ['5511964945942@c.us'],
      },
    });

    const getGroupLinkFunction = jest.spyOn(
      fakeWhatsappProvider,
      'getGroupInviteLink',
    );
    const sendTextMessageFunction = jest.spyOn(
      fakeWhatsappProvider,
      'sendText',
    );

    await startCloning.execute();

    expect(getGroupLinkFunction).toHaveBeenCalledTimes(1);
    expect(sendTextMessageFunction).toHaveBeenCalledTimes(1);
  });

  it('should be able to throw logError with log mode if it not possible to sendText', async () => {
    await fakeJsonDBProvider.setConfigs({
      links: {
        linkMode: true,
      },
      cloning: {
        cloningContactsToAddPerDelay: 1,
        cloningDelay: 10,
        cloningContacts: ['5511964945942@c.us'],
      },
    });

    jest
      .spyOn(fakeWhatsappProvider, 'sendText')
      .mockImplementation(async () => {
        throw new Error();
      });

    await expect(startCloning.execute()).rejects.toBeInstanceOf(LogError);
  });

  it('should be able to throw logError with link mode off if it not possible to addParticipant', async () => {
    await fakeJsonDBProvider.setConfigs({
      links: {
        linkMode: false,
      },
      cloning: {
        cloningContactsToAddPerDelay: 1,
        cloningDelay: 10,
        cloningContacts: ['5511964945942@c.us'],
      },
    });

    jest
      .spyOn(fakeWhatsappProvider, 'addParticipant')
      .mockImplementation(async () => {
        throw new Error();
      });

    await expect(startCloning.execute()).rejects.toBeInstanceOf(LogError);
  });
});
