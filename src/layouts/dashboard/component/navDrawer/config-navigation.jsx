import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

// ----------------------------------------------------------------------

const navConfig = [
    {
        title: 'Inbox',
        path: 'inbox',
        icon: <InboxRoundedIcon/>,
    },
    {
        title: 'Today',
        path: 'today',
        icon: <CalendarMonthRoundedIcon/>,
    },
    {
        title: 'Upcoming',
        path: 'upcoming',
        icon: <UpcomingRoundedIcon/>,
    },
    {
        title: 'Filter & Labels',
        path: 'filter-labels',
        icon: <GridViewRoundedIcon/>,
    },
];

export default navConfig;
