import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,

    },
    password: {
      type: String,
      required: true,
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    }]
  },
  {
    timestamps: true,
  }
);


export const UserModel = mongoose.model("User", userSchema);

