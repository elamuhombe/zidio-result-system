import { Schema, Document, model, Types } from "mongoose";

// Define interface for the Users document structure
interface IUser extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: "student" | "admin";
  marks?: Types.ObjectId[]; // Optional, only for students
  uniqueId?: string;
}

// Define schema for the Users model
const UserSchema: Schema<IUser> = new Schema({
  userId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["student", "admin"], required: true },
  marks: [{ type: Schema.Types.ObjectId, ref: "Marks" }],
  uniqueId: { type: String, required: true, unique: true },
});

// Export the Users model
const User = model<IUser>("User", UserSchema);
export { User, IUser };
