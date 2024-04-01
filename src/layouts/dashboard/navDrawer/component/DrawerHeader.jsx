import {Avatar, Button, Icon, IconButton, Stack, Typography} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';

export const DrawerHeader = ({openNav, onToggleDrawer}) => {
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Button variant={"text"}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1}>
                    <Avatar sx={{width: 24, height: 24}}>
                    </Avatar>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <Typography variant={"body2"} fontWeight={"bold"}>
                            Mahdi
                        </Typography>
                        <Icon sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <KeyboardArrowDownRoundedIcon/>
                        </Icon>
                    </Stack>
                </Stack>
            </Button>

            <Stack direction={"row"} spacing={1} alignItems={"center"} justifyContent={"center"}>
                <IconButton size={"medium"}>
                    <NotificationsRoundedIcon fontSize={"small"}/>
                </IconButton>
                <IconButton size={"medium"} onClick={onToggleDrawer}>
                    <ViewSidebarRoundedIcon fontSize={"small"}/>
                </IconButton>
            </Stack>
        </Stack>
    )
}