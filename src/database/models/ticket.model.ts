import { Schema, model } from 'mongoose';
import mongooseAutopopulate from 'mongoose-autopopulate';
import { DATABASES } from '../../constants';
import ITicket from '../../interfaces/ticket.interface';

const ticketSchema = new Schema<ITicket>(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.EVENT,
      autopopulate: true,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER,
      autopopulate: true,
      required: true,
    },
    ticket_number: {
      type: String,
      required: true,
      unique: true,
    },
    seating_plan_section: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['valid', 'invalid', 'used'],
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

ticketSchema.plugin(mongooseAutopopulate);

const TicketModel = model<ITicket>('Ticket', ticketSchema);

export default TicketModel;
