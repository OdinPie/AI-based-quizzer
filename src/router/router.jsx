import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import QuizPage from "../pages/QuizPage/QuizPage";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";

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
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])