import { Request, Response } from 'express';
import { siteService, userService } from '../services';
import { SuccessResponse, InternalErrorResponse, NotFoundResponse } from '../helpers/response';
import { MESSAGES } from '../constants';
import logger from '../helpers/logger';
import { mailController } from './mail.controller';

class Controller {
  async create(req: Request, res: Response) {
    const data = await siteService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);

    if (!pagination) pagination = 1;

    pagination = (pagination - 1) * 10;

    const data = await siteService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async getCount(req: Request, res: Response) {
    const data = await siteService.getCount(req.query);

    // If nothing exists, return 0 as the count
    if (!data) return SuccessResponse(res, { data: 0 });

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await siteService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await siteService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await siteService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await siteService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }
}

export const siteController = new Controller();
