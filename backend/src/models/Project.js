import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    repoUrl: { type: String, default: null },
    liveUrl: { type: String, default: null },
    imageUrl: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
