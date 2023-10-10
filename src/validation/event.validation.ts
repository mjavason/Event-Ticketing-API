import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new event
  create = {
    body: z.object({
      title: z.string().min(3).max(255),
      description: z.string().min(1),
      startTime: z.string(),
      endTime: z.string(),
      location: z.string().min(1),
      seatingPlan: z.array(
        z.object({
          section: z.string().min(1),
          capacity: z.number().int().positive(),
          price: z.number().positive(),
          currency: z.string().min(1),
        }),
      ),
      status: z.enum(['draft', 'published', 'cancelled', 'done']).optional(),
    }),
  };

  // Validation schema for updating an existing event
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      organizer: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      title: z.string().min(3).max(255).optional(),
      description: z.string().min(1).optional(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      location: z.string().min(1).optional(),
      seatingPlan: z
        .array(
          z.object({
            section: z.string().min(1),
            capacity: z.number().int().positive(),
            price: z.number().positive(),
            currency: z.string().min(1),
          }),
        )
        .optional(),
      status: z.enum(['draft', 'published', 'cancelled', 'done']).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for deleting an event
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for retrieving events with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      organizer: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      location: z.string().min(1).optional(),
      status: z.enum(['draft', 'published', 'cancelled', 'done']).optional(),
    }),
  };
}

export const eventValidation = new Validation();
