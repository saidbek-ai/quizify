import { Provider } from "react-redux";
import store from "./store";
import Quiz from "./pages/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import QuizList from "./pages/QuizList";
import QuizQuestions from "./pages/QuizQuestions";
import Login from "./pages/Login";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import DocEditor from "./pages/DocEditor";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/writing-plygnd",
      element: (
        <ProtectedRoute>
          <DocEditor />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/blogs",
      element: <Blogs />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blogs/:id",
      element: <Blog />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/quiz",
      element: (
        <ProtectedRoute>
          <Quiz />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        { element: <QuizList />, index: true },
        { path: "questions", element: <QuizQuestions /> },
      ],
    },
  ],
  {
    basename: "/quizify",
  }
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
