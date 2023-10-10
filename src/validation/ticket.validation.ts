import { z } from 'zod';
import { Types } from 'mongoose';

class TicketValidation {
  // Validation schema for creating a new ticket
  create = {
    body: z.object({
      event: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
      seating_plan_section: z.string(),
      status: z.enum(['valid', 'invalid', 'used']),
    }),
  };

  // Validation schema for updating an existing ticket
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      event: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      user: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      seating_plan_section: z.string().optional(),
      status: z.enum(['valid', 'invalid', 'used']).optional(),
    }),
  };

  // Validation schema for deleting a ticket
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for retrieving tickets with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      event: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      user: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      seating_plan_section: z.string().optional(),
      ticket_number: z.string().optional(),
      status: z.enum(['valid', 'invalid', 'used']).optional(),
    }),
  };
}

export const ticketValidation = new TicketValidation();
