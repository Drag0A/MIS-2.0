import { FaHome } from 'react-icons/fa';
import { IoDocumentSharp } from 'react-icons/io5';
import { FiLogIn } from 'react-icons/fi';
import { IoSettings } from 'react-icons/io5';
export const navData = [
    {
        id: 0,
        icon: <FaHome size={20} />,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <IoDocumentSharp size={20} />,
        text: "Documents",
        link: "/documents"
    },
    {
        id: 2,
        icon: <FiLogIn size={20} />,
        text: "Logout",
        link: "/logout"
    },
    {
        id: 3,
        icon: <IoSettings size={20} />,
        text: "Settings",
        link: "/settings"
    }
]