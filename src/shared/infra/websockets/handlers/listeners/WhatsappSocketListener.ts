import IWhatsappProvider from '@shared/container/providers/WhatsappProvider/models/IWhatsappProvider';
import { Socket, Server } from 'socket.io';

import { container, inject, injectable } from 'tsyringe';
import StartWhatsapp from '../events/StartWhatsapp';

@injectable()
export default class WhatsappSocketListener {
  constructor(
    @inject('WhatsappProvider')
    private whatsappProvider: IWhatsappProvider,
  ) {}

  public execute(io: Server) {
    io.on('connection', (socket: Socket) => {
      socket.on('front:logout', async () => {
        await this.whatsappProvider.logout();
      });

      socket.on('front:restart', async () => {
        await this.whatsappProvider.logout();
        await container.resolve(StartWhatsapp).execute(io);
      });
    });
  }
}
