import UsersPage from "../../../pages/AccessControl/UsersPage/index.jsx";
import SettingsPage from "../../../pages/AccessControl/SettingsPage/index.jsx";

export default [
    {
        path: '/users',
        element: <UsersPage/>
    },
    {
        path: '/settings',
        element: <SettingsPage/>

    }
]