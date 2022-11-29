import { FiSettings, FiInfo } from 'react-icons/fi';
import { AiOutlineContacts, AiFillFacebook, AiFillTwitterCircle, AiFillProfile } from 'react-icons/ai';
import { FaHome, FaLinkedin } from 'react-icons/fa';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { MdAccountCircle, MdPlaylistAddCheck, MdOutlineSupportAgent, MdReport } from 'react-icons/md';
import '../styles/sidebar.css';

export const navData = [
    {
        "title": "General",
        "icon": <FiSettings className="icons" />,
        "childrens": [
            {
                "title": "Home",
                "icon": <FaHome className="icons" />,
                "path": "/"
            },
            {
                "title": "About",
                "icon": <FiInfo className="icons" />,
                "path": "/about"
            },
            {
                "title": "Contact",
                "icon": <AiOutlineContacts className="icons" />,
                "childrens": [
                    {
                        "title": "Facebook",
                        "icon": <AiFillFacebook className="icons" />
                    },
                    {
                        "title": "Twitter",
                        "icon": <AiFillTwitterCircle className="icons" />
                    },
                    {
                        "title": "LinkedIn",
                        "icon": <FaLinkedin className="icons" />
                    }
                ]
            },
            {
                "title": "FAQ",
                "icon": <BsQuestionSquareFill className="icons" />
            }
        ]
    },
    {
        "title": "Account",
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [
            {
                "title": "Login",
                "path": "/login",
            },
            {
                "title": "Register",
                "path": "/register",
            },
            {
                "title": "Forgot Password",
                "path": "/forgot-password",
            },
            {
                "title": "Reset Password",
                "path": "/reset-password",
            }
        ]
    },
    {
        "title": "Profile",
        "icon": <AiFillProfile className="icons" />,
        "childrens": [
            {
                "title": "Profile",
                "path": "/profile"
            },
            {
                "title": "Settings",
                "childrens": [
                    {
                        "title": "Account",
                        "path": "/settings/account"
                    },
                    {
                        "title": "Billing",
                        "childrens": [
                            {
                                "title": "Payment",
                                "path": "/settings/billing/payment"
                            },
                            {
                                "title": "Subscription",
                                "path": "/settings/billing/subscription"
                            }
                        ]
                    },
                    {
                        "title": "Notifications",
                        "path": "/settings/notifications"
                    }
                ]
            },
            {
                "title": "Logout",
                "path": "/logout"
            }
        ]
    },
    {
        "title": "Advance",
        "icon": <MdPlaylistAddCheck className="icons" />,
        "childrens": [
            {
                "title": "Search",
                "path": "/search"
            },
            {
                "title": "History",
                "path": "/history"
            }
        ]
    },
    {
        "title": "Support",
        "icon": <MdOutlineSupportAgent className="icons" />,
        "path": "/support"
    },
    {
        "title": "Report Bug",
        "icon": <MdReport className="icons" />,
        "path": "/report-bug"
    }
]