import React  from 'react'
import * as  FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SideNav_Data = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: 'Cars',
        path: '/Cars',
        icons: <AiIcons.AiFillCar />,
        cName: "nav-text"
    },
    {
    
        title: 'Representatives',
        path: '/Reps',
        icons: <FaIcons.FaUserTie />,
        cName: "nav-text"
    },
    {
    
        title: 'Loan Estimator',
        path: '/LoanEst',
        icons: <FaIcons.FaPiggyBank />,
        cName: "nav-text"
    },
    {
    
        title: 'Account',
        path: '/Account',
        icons: <FaIcons.FaUserCircle />,
        cName: "nav-text"
    },
    {
    
        title: 'Support',
        path: '/Support',
        icons: <RiIcons.RiQuestionnaireFill />,
        cName: "nav-text"
    },
]