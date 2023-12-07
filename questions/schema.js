import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    points: Number,
    index: Number,
    content: String,
    quizId: String,
    instruction: String,
    //for t/f
    answerForTF: Boolean,
    //for MCQ
    MCQchoice:[{ type: String }],
    MCQcorrectAnswer:[{ type: String }],
    //for fill in the blank
    answerForBlank:[{ type: String }],

    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the blank"],
      default: "Fill in the blank" },

  },
  { collection: "questions" });
export default questionSchema;