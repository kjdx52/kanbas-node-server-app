import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    points: Number,
    index: Number,
    title:String,
    content: String,
    quizId: String,
    instruction: String,
    //for t/f
    answerForTF: Boolean,
    //for MCQ
    MCQchoice:[{ text: String, isCorrect:Boolean }],
    // MCQcorrectAnswer:[{ type: String }],
    //for fill in the blank
    answerForBlank:[{ type: String }],

    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the blank"],
      default: "Fill in the blank" },

  },
  { collection: "questions" });
export default questionSchema;