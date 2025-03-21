
//

// import { Badge } from "primereact/badge";
import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";


const itemRenderer = (item) => (
    <NavLink
        to={item.path}
        className='flex align-items-center p-menuitem-link'
    >
        <Button
            label={item.label}
            icon={item.icon}
            className='p-button-text'
        />
    </NavLink>
);


export  const HEADER_NAV_ITEMS = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'TODO LIST',
        icon: 'pi pi-plus'
    },
    {
        label: "Access Control",
        icon: 'pi pi-shield',
        items: [
            {
                label: 'Users',
                icon: 'pi pi-user',
                path: '/users',
                template: itemRenderer
            },
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                path: '/settings',
                template: itemRenderer
            }
        ]
    },
];
