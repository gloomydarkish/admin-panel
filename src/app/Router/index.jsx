import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";
import DefaultLayout from "../../layout/DefaultLayout.jsx";
import MainPage from "../../pages/MainPage/index.jsx";

const router = createBrowserRouter([
    {
        path:'/login',
        element: <Login/>,
    },
    {
        path:'/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <MainPage/>
            }
        ]
    }
])
export default  router