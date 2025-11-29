import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open',
  },
  createdAt: { type: Date, default: Date.now }
});

const Bug = mongoose.models.Bug || mongoose.model('Bug', bugSchema);
export default Bug;
