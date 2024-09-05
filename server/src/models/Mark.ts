import { Schema, Document, model, Types } from "mongoose";

// Define the Mark interface
interface IMark extends Document {
  userId: Types.ObjectId;
  category:
    | "Attendance"
    | "Project Review"
    | "Assessment"
    | "Project Submission"
    | "LinkedIn Post";
  score: number;
  maxScore: number;
  date: Date;
}

// Define the Mark schema
const MarkSchema = new Schema<IMark>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  category: {
    type: String,
    enum: [
      "Attendance",
      "Project Review",
      "Assessment",
      "Project Submission",
      "LinkedIn Post",
    ],
    required: true,
  },
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

// Export the Mark model
const Mark = model<IMark>("Mark", MarkSchema);
export { Mark, IMark };
