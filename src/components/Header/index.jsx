import './index.css'
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';
import { HEADER_NAV_ITEMS } from './constans.jsx'


const Header = () => {

    const logoutButtonTemplate = (
        <Button
            icon="pi pi-sign-out"
            severity="help"
            aria-label="Favorite"
        />
)


    return (
        <header className="header">
            <div className="container">
                <Menubar
                    model={HEADER_NAV_ITEMS}
                    end={logoutButtonTemplate}
                />
            </div>
        </header>
    )
}

export default Header;