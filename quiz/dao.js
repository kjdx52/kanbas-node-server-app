import model from "./model.js";
export const createQuiz = (quiz) => model.create(quiz);
export const findQuizzesByCourseId = (courseId) => model.find({courseId}).sort({ availableFromDate: 1 });
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);

export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });