import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import CalendarViewDayRoundedIcon from '@mui/icons-material/CalendarViewDayRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';

const SearchModalConfig = {
    sections: [
        {
            title: "Recently viewed",
            items: [
                {
                    title: "Inbox",
                    icon: <InboxRoundedIcon/>
                },
                {
                    title: "Today",
                    icon: <CalendarMonthRoundedIcon/>
                },
            ]
        },
        {
            title: "Navigation",
            items: [
                {
                    title: "Go to Home",
                    icon: <HomeRoundedIcon/>
                },
                {
                    title: "Go to Inbox",
                    icon: <InboxRoundedIcon/>
                },
                {
                    title: "Go to Today",
                    icon: <CalendarMonthRoundedIcon/>
                },
                {
                    title: "Go to Upcoming",
                    icon: <UpcomingRoundedIcon/>
                },
                {
                    title: "Go to Filter & Labels",
                    icon: <GridViewRoundedIcon/>
                },
                {
                    title: "Go to Completed",
                    icon: <TaskAltRoundedIcon/>
                },
                {
                    title: "Go to activity",
                    icon: <EqualizerRoundedIcon/>
                },
                {
                    title: "Open project...",
                    icon: <ListRoundedIcon/>
                },
                {
                    title: "Open section...",
                    icon: <CalendarViewDayRoundedIcon/>
                },
                {
                    title: "Open label...",
                    icon: <LocalOfferRoundedIcon/>
                },
            ]
        },
        {
            title: "Add",
            items: [
                {
                    title: "Add task",
                    icon: <AddRoundedIcon/>
                },
            ]
        }
    ]
}

export default SearchModalConfig;