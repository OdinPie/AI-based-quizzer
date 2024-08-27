import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import QuizPage from "../pages/QuizPage/QuizPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/quiz-page',
                element: <QuizPage></QuizPage>,
            }
        ]
    }
])