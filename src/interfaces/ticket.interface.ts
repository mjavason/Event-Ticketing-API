import { Types } from 'mongoose';

export default interface ITicket {
  _id?: string;
  event: string | Types.ObjectId;
  user: string | Types.ObjectId;
  ticket_number: string;
  seating_plan_section: string;
  status: 'valid' | 'invalid' | 'used';
  deleted?: boolean;
}
