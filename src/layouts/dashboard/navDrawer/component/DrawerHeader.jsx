import {Avatar, Badge, Button, Icon, IconButton, Stack, Typography} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import profileImage from '/src/assets/img/profileImage.jpeg'

export const DrawerHeader = ({openNav, onToggleDrawer}) => {
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Button variant={"text"} sx={{'&.MuiButton-text': {textTransform: 'none', padding: 1}}}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1}>
                    <Badge
                        color={'secondary'}
                        badgeContent={' '}
                        variant={'dot'}
                        overlap={'circular'}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        invisible={false}
                    >
                        <Avatar
                            src={profileImage}
                            sx={{
                                width: 20,
                                height: 20,
                                outline: '2px solid',
                                outlineColor: 'primary.main',
                                outlineOffset: 1,
                            }}>
                        </Avatar>
                    </Badge>
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