import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    quizname: { type: String, required: true },
    courseId: String,
    instruction: String,
    points: Number,
    type: String,
    assignmentGroup: String,
    minutes: Number,
    attemptTimes: Number,
    numberOfQuestions: Number,
    availableFromDate: String,
    availableUntilDate: String,
    dueDate: String,
    isShuffle: Boolean,
    isTimeLimited: Boolean,
    isMultipleAttempts :Boolean,
    isOneQuestionAtaTime: Boolean,
    isRequireRespondusLockdownBrowser: Boolean,
    isRequiredToViewQuizResults: Boolean,
    isWebcam: Boolean,
    isLockQuestionAfterAnswer: Boolean,
    isPublish: Boolean,
    status: {
      type: String,
      enum: ["Open", "Closed", "Pending", "Not available"],
      default: "Closed" },
    showCorrectAnswers: {
        type: String,
        enum: ["Immediately", "After Due", "Never"],
        default: "Immediately" },
  },
  { collection: "quizzes" });
export default quizSchema;