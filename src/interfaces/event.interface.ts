import { Types } from 'mongoose';

export default interface IEvent {
  _id?: string;
  organizer: string | Types.ObjectId; // You may replace "organizer" with "user" if that's the terminology you prefer
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;
  seatingPlan: {
    section: string;
    capacity: number;
    price: number;
    currency: string;
  }[];
  status: 'draft' | 'published' | 'cancelled' | 'done';
  deleted?: boolean;
}
