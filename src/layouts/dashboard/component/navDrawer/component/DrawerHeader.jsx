import {Avatar, Badge, Button, Icon, IconButton, Stack, Typography} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';
import profileImage from '/src/assets/img/profileImage.jpeg'
import {useState} from "react";
import {ProfileMenu} from "../../../../../ui/menu/ProfileMenu/ProfileMenu.jsx";

export const DrawerHeader = ({openNav, onToggleDrawer}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <ProfileMenu anchorEl={anchorEl} open={open} onClose={handleClose}/>
            <Button
                variant={"text"}
                sx={{'&.MuiButton-text': {textTransform: 'none', padding: 1}}}
                color={'inherit'}
                onClick={handleClick}
            >
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
                                width: 24,
                                height: 24,
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
                <IconButton
                    size={"medium"}
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        }
                    }}
                >
                    <NotificationsRoundedIcon fontSize={"small"}/>
                </IconButton>
                <IconButton
                    size={"medium"}
                    onClick={onToggleDrawer}
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        }
                    }}
                >
                    <ViewSidebarRoundedIcon fontSize={"small"}/>
                </IconButton>
            </Stack>
        </Stack>
    )
}