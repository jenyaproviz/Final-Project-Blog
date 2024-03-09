import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 2,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 7,
      maxlength: 100,
    },
    isAdmin: { type: Boolean, default: false },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
