import { Schema, model } from 'mongoose';
import mongooseAutopopulate from 'mongoose-autopopulate';
import { DATABASES } from '../../constants';
import IEvent from '../../interfaces/event.interface';

const eventSchema = new Schema<IEvent>(
  {
    // Reference to the organizer/user who owns the event
    organizer: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER,
      autopopulate: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    seating_plan: [
      {
        section: String,
        capacity: Number,
        price: Number,
        currency: String,
      },
    ],
    status: {
      type: String,
      enum: ['draft', 'published', 'cancelled', 'done'],
      default: 'draft',
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

// Plugin for autopopulating the 'organizer' field when querying
eventSchema.plugin(mongooseAutopopulate);

// Create and export the Event model
const EventModel = model<IEvent>(DATABASES.EVENT, eventSchema);

export default EventModel;
