import { Schema, model } from 'mongoose';
import mongooseAutopopulate from 'mongoose-autopopulate';
import { DATABASES } from '../../constants';
import IEvent from '../../interfaces/event.interface';

const EventSchema = new Schema<IEvent>(
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
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    seatingPlan: [
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
EventSchema.plugin(mongooseAutopopulate);

// Create and export the Event model
const EventModel = model<IEvent>(DATABASES.EVENT, EventSchema);

export default EventModel;
