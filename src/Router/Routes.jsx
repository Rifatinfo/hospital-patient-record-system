import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddPatient from "../Pages/AddPatient/AddPatient";
import AllPatient from "../Pages/AllPatient/AllPatient";
import UpdatePatient from "../Pages/Update/UpdatePatient";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/add-patient",
          element: <AddPatient/>,
        },
        {
          path: "/all-patient",
          element: <AllPatient/>,
        },
        {
            path: "/update-patient/:id",
            element: <UpdatePatient />,
            loader: ({ params }) => fetch(`http://localhost:5000/all-patient/${params.id}`)
        }
          
      ]
    },
  ]);

  export default router;