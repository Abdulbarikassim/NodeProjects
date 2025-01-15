import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      typeof: String,
      require: true,
    },
    password: {
      typeof: String,
      require: true,
    },
    name: {
      typeof: String,
      require: true,
    },
    lastLogin: {
      typeof: Date,
      require: true,
    },
    isVerified: {
      typeof: Boolean,
      require: true,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

// create the user model with schema above.

export const User = mongoose.model("User", userSchema);
