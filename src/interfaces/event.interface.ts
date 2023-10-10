import { Types } from 'mongoose';

export default interface IEvent {
  _id?: string;
  organizer: string | Types.ObjectId; // You may replace "organizer" with "user" if that's the terminology you prefer
  title: string;
  description: string;
  start_time: Date;
  end_time: Date;
  location: string;
  seating_plan: {
    section: string;
    capacity: number;
    price: number;
    currency: string;
  }[];
  status: 'draft' | 'published' | 'cancelled' | 'done';
  deleted?: boolean;
}
