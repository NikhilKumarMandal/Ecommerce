import mongoose, { Schema } from "mongoose";


const User = new Schema(
  {
    content: {
      type: String,
      required: true,
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    images: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);



export const SocialPost = mongoose.model("SocialPost", postSchema);