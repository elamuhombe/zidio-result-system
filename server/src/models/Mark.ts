import { Schema, Document, model, Types } from "mongoose";

// Define interface for the Marks document structure
interface IMark extends Document {
  userId: Types.ObjectId;
  category: string;
  score: number;
  maxScore: number;
  date: Date;
}

// Define the schema for the Marks collection
const MarkSchema: Schema<IMark> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  });
  
  // Create and export the model for Marks
  const Mark = model<IMark>("Mark", MarkSchema);
  export  {Mark, IMark};
