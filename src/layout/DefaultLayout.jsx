import Header from "./../components/Header/index.jsx";
import {Outlet} from "react-router-dom";
import MainPage from "../pages/MainPage/index.jsx";

const DefaultLayout = () => {

    return (
        <div className="default-layout">
            <Header />
            <div className="container">
                <Outlet/>
                <footer className="footer">
                    <p>&copy; All right reserved</p>
                </footer>
            </div>
        </div>
    )
}
export default DefaultLayout