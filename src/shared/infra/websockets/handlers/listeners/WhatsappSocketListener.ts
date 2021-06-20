import IWhatsappProvider from '@shared/container/providers/WhatsappProvider/models/IWhatsappProvider';
import { Socket, Server } from 'socket.io';

import { inject, injectable } from 'tsyringe';

@injectable()
export default class WhatsappSocketListener {
  constructor(
    @inject('WhatsappProvider')
    private whatsappProvider: IWhatsappProvider,
  ) {}

  public execute(io: Server) {
    io.on('connection', (socket: Socket) => {
      socket.on('front:logout', () => {
        this.whatsappProvider.logout();
      });
    });
  }
}
