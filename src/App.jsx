import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import LoginPage from "./page/LoginPage";
// import Navigation from "./component/Navigation";
import Dashboard from "./page/Dashboard";
import Upload from "./page/Upload";
import Invoice from "./page/Invoice";
import Schedule from "./page/Schedule";
import Calender from "./page/Calender";
import Notification from "./page/Notification";
import Settings from "./page/Settings";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LoginPage/>,
    },
    {
      path:"",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "upload",
          element: <Upload />,
        },
        {
          path: "invoice",
          element: <Invoice />,
        },
        {
          path: "schedule",
          element: <Schedule />,
        },
        {
          path: "calender",
          element: <Calender />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "settings",
          element: <Settings />,
        }
      ],
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Upload/> */}
    </Provider>
  );
}

export default App;
