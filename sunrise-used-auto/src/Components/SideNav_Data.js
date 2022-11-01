import React from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const SideNav_Data = [
    {
        title: "Home",
        icon: <CottageIcon />,
        link: "/Home"
    },
    {
        title: "Cars",
        icon: <DirectionsCarFilledIcon />,
        link: "/Cars"
    },
    {
        title: "Representatives",
        icon: <PersonIcon />,
        link: "/Representatives"
    },
    {
        title: "Loan Estimator",
        icon: <AccountBalanceIcon />,
        link: "/Loan-Estimator"
    },
    {
        title: "Account",
        icon: <AccountCircleIcon />,
        link: "/Account"
    },
    {
        title: "Support",
        icon: <ContactSupportIcon />,
        link: "/Support"
    },

]