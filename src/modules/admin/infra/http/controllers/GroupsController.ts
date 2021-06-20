import ListGroupsIamAdminService from '@modules/admin/services/ListGroupsService';
import SetGroupsService from '@modules/admin/services/SetGroupsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class GroupsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const isAdmin = Boolean(Number(request.query.admin_groups));
    const listGroupsIamAdminService = container.resolve(
      ListGroupsIamAdminService,
    );

    const groupsIamAdmin = await listGroupsIamAdminService.execute(isAdmin);

    return response.json(groupsIamAdmin);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { hostGroupId, targetGroupId, targetGroupLink } = request.body;
    const setGroupsService = container.resolve(SetGroupsService);

    await setGroupsService.execute({
      hostGroupId,
      targetGroupId,
      targetGroupLink,
    });

    return response.status(202).json();
  }
}
