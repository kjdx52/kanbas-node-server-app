import * as dao from "./dao.js";
function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const courseId = req.params.courseId;
        const quizData = req.body;
        quizData.courseId=courseId;
        const quiz = await dao.createQuiz(quizData);
        res.json(quiz);
    };

    const findQuizzesByCourseId = async (req, res) => {
        const quizzes = await dao.findQuizzesByCourseId(req.params.courseId);
        res.json(quizzes);
    };



    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        res.json(status);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
    //   const findAllQuizzes = async (req, res) => {
    //     const quizzes = await dao.findAllQuizzes();
    //     res.json(quizzes);
    //   };

    app.post("/api/courses/:courseId/quizzes", createQuiz);
    app.get("/api/courses/:courseId/quizzes", findQuizzesByCourseId)
    app.get("/api/quizzes/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    //   app.get("/api/quizzes", findAllQuizzes);
}

export default QuizRoutes;

