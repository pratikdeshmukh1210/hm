// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },

    category: {
      type: String,
      enum: ["MENS", "WOMENS", "KIDS"],
      default: "KIDS",
    },

    // 🔥 FIX: sizes array
    sizes: [
      {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
        required: true,
      },
    ],

    colors: [
      {
        type: String,
        required: true,
      },
    ],

    images: [
      {
        type: String,
        required: true,
      },
    ],

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", productSchema) ;