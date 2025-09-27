import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 320 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
