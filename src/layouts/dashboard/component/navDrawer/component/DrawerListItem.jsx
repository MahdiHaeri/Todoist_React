import navConfig from "../config-navigation.jsx";
import {Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

export const DrawerListItem = () => {
    const navigate = useNavigate()
    return (
        <List disablePadding>
            {navConfig.map((item) => (
                <ListItem key={item.title} disablePadding>
                    <NavLink to={item.path} style={{textDecoration: 'none', color: 'inherit', width: '100%'}}>
                        {({isActive, isPending, isTransitioning}) => (
                            <ListItemButton
                                sx={{
                                    borderRadius: 1,
                                    padding: 1,
                                    backgroundColor: isActive ? 'action.selected' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: isActive ? 'action.selected' : 'action.hover',
                                    },
                                    color: isActive ? 'primary.main' : 'inherit',
                                }}
                            >
                                <Stack width={'100%'}
                                       direction={"row"}
                                       justifyContent={"start"}
                                       alignItems={"center"}
                                       gap={1}
                                >
                                    {item.icon}
                                    <Typography variant={"subtitle2"}
                                                sx={{color: isActive ? 'primary.lighter' : 'inherit'}}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                            </ListItemButton>
                        )}
                    </NavLink>
                </ListItem>
            ))}
        </List>
    )
}