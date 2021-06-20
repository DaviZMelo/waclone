import ListSelectedGroupsService from '@modules/admin/services/ListSelectedGroupsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SelectedGroupsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSelectedGroupsService = container.resolve(
      ListSelectedGroupsService,
    );

    const selectedGroups = await listSelectedGroupsService.execute();

    return response.json(selectedGroups).status(200);
  }
}
