import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

const profileMenuConfig = {
    sections: [
        {
            title: 'Profile',
            items: [
                {
                    title: 'Mahdi Haeri',
                    titleFontWeight: 'bold',
                    description: '0/5 tasks',
                    icon: <TrendingUpRoundedIcon fontSize={"inherit"}/>,
                    endAdornment: 'O then P',
                    onClick: () => {

                    }
                },
            ]
        },
        {
            title: 'Setting',
            items: [
                {
                    title: 'Setting',
                    icon: <SettingsRoundedIcon fontSize={"inherit"}/>,
                    endAdornment: 'O then S',
                    onClick: () => {

                    }
                },
                {
                    title: 'Add a team',
                    icon: <AddRoundedIcon fontSize={"inherit"}/>,
                    onClick: () => {

                    }
                },
            ]
        },
        {
            title: 'Activity',
            items: [
                {
                    title: 'Activity log',
                    icon: <TroubleshootRoundedIcon fontSize={"inherit"}/>,
                    endAdornment: 'G then A',
                    onClick: () => {

                    }
                },
                {
                    title: 'Print',
                    icon: <LocalPrintshopRoundedIcon fontSize={"inherit"}/>,
                    endAdornment: '⌘P',
                    onClick: () => {

                    }
                },
                {
                    title: 'Resources',
                    icon: <MenuBookRoundedIcon fontSize={"inherit"}/>,
                    onClick: () => {

                    }
                }
            ]
        },
        {
            title: 'Pro',
            items: [
                {
                    title: 'Upgrade to Pro',
                    icon: <StarBorderRoundedIcon fontSize={"inherit"}/>,
                    iconColor: 'warning.main',
                    onClick: () => {

                    }
                },
            ]
        },
        {
            title: 'Sync',
            items: [
                {
                    title: 'Sync',
                    icon: <SyncRoundedIcon fontSize={"inherit"}/>,
                    endAdornment: '12 minutes ago',
                    onClick: () => {

                    }
                },
            ]
        },
        {
            title: 'Logout',
            items: [
                {
                    title: 'Logout',
                    icon: <LogoutRoundedIcon fontSize={"inherit"}/>,
                    onClick: () => {

                    }
                },
            ]
        }
    ]
}

export default profileMenuConfig;