// import DefaultLayout from './layout/DefaultLayout.jsx';
// import CustomButton from "./components/CustomButton/index.jsx";
import {RouterProvider} from "react-router-dom";
import router from "../app/Router";
// import UsersPage from "./pages/AccessControl/UsersPage/index.jsx";
// import MainPage from "./pages/MainPage/index.jsx";
// import DefaultLayout from "./layout/DefaultLayout.jsx";


function App() {

  return (
      // <Routes>
      //     <Route path="/" component={<DefaultLayout/>} >
      //         <Route index element={<MainPage/>} />
      //         <Route path="/users" element={<UsersPage/>} />
      //     </Route>
      // </Routes>
      
      <RouterProvider  router={router}/>
  )
}

export default App
