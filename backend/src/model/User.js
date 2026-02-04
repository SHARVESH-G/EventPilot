import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    age: {
      type: Number,
      required: true,
      min: 13,
    },

    balance:{
      type:Number,
      required:false,
      default:1000,
    },

    status: {
      type: String,
      enum: ["Student", "College", "Working" , "Other"],
      required: true,
    },

    organisationName: {
      type: String,
      trim: true,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin", "organiser"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
