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

const router = createBrowserRouter([
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
    path: "/blogs",
    element: <Blogs />,
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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
