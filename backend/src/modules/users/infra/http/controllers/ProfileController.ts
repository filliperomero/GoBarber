import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(req: Request, res: Response): Promise<Response> {
    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id: req.user.id });

    delete user.password;

    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email, password, oldPassword } = req.body;

    const updateProfileService = container.resolve(UpdateProfileService);

    const user = await updateProfileService.execute({
      user_id: req.user.id,
      name,
      email,
      oldPassword,
      password,
    });

    delete user.password;

    return res.json(user);
  }
}
