import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddQuiz } from "./QuizApp";
import {See} from "./See";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddQuiz />,
  },
  {
    path: "/see",
    element: <See />,
  },
]);


  return <RouterProvider router={router} />;
}

export default App;
