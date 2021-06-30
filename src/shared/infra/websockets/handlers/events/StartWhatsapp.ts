import IWhatsappProvider from '@shared/container/providers/WhatsappProvider/models/IWhatsappProvider';
import { Server } from 'socket.io';
import { container, inject, injectable } from 'tsyringe';
import HandleWhatsappMessage from './HandleWhatsappMessage';
import HandleWhatsappEvent from './HandleWhatsappEvent';
import WhatsappSocketListener from '../listeners/WhatsappSocketListener';

@injectable()
export default class StartWhatsapp {
  constructor(
    @inject('WhatsappProvider')
    private whatsappProvider: IWhatsappProvider,
  ) {}

  public async execute(io: Server) {
    await this.whatsappProvider.createInstance();
    const myPhoneNumber = await this.whatsappProvider.getHostNumber();

    container.registerInstance<IWhatsappProvider>(
      'WhatsappProvider',
      this.whatsappProvider,
    );

    await container.resolve(HandleWhatsappMessage).execute();
    container.resolve(HandleWhatsappEvent).execute(io);
    container.resolve(WhatsappSocketListener).execute(io);
    io.emit('wa:signin', myPhoneNumber);

    return true;
  }
}
