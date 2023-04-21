const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      require: true,
    },
    orderIndex: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Todo", todoSchema);
