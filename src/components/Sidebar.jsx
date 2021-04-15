import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillDashboard />,
        cName: 'nav-text'
    },

    {
        title: 'My Courses',
        path: '/',
        icon: <FaIcons.FaBookReader />,
        cName: 'nav-text'
    },

    {
        title: 'Achievements',
        path: '/',
        icon: <FaIcons.FaTrophy />,
        cName: 'nav-text'
    },

    {
        title: 'Forum',
        path: '/',
        icon: <FaIcons.FaCommentAlt />,
        cName: 'nav-text'
    }
]